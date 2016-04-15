/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * PunchStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PunchConstants = require('../constants/PunchConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _punches = {};

/**
 * Create a PUNCH item.
 * @param  {string} text The content of the PUNCH
 */
function create(text) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _punches[id] = {
    id: id,
    complete: false,
    text: text
  };
}

/**
 * Update a PUNCH item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
  _punches[id] = assign({}, _punches[id], updates);
}

/**
 * Update all of the PUNCH items with the same object.
 * @param  {object} updates An object literal containing only the data to be
 *     updated.
 */
function updateAll(updates) {
  for (var id in _punches) {
    update(id, updates);
  }
}

/**
 * Delete a PUNCH item.
 * @param  {string} id
 */
function destroy(id) {
  delete _punches[id];
}

/**
 * Delete all the completed PUNCH items.
 */
function destroyCompleted() {
  for (var id in _punches) {
    if (_punches[id].complete) {
      destroy(id);
    }
  }
}

var PunchStore = assign({}, EventEmitter.prototype, {

  /**
   * Tests whether all the remaining PUNCH items are marked as completed.
   * @return {boolean}
   */
  areAllComplete: function() {
    for (var id in _punches) {
      if (!_punches[id].complete) {
        return false;
      }
    }
    return true;
  },

  /**
   * Get the entire collection of PUNCHs.
   * @return {object}
   */
  getAll: function() {
    return _punches;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case PunchConstants.PUNCH_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        PunchStore.emitChange();
      }
      break;

    case PunchConstants.PUNCH_TOGGLE_COMPLETE_ALL:
      if (PunchStore.areAllComplete()) {
        updateAll({complete: false});
      } else {
        updateAll({complete: true});
      }
      PunchStore.emitChange();
      break;

    case PunchConstants.PUNCH_UNDO_COMPLETE:
      update(action.id, {complete: false});
      PunchStore.emitChange();
      break;

    case PunchConstants.PUNCH_COMPLETE:
      update(action.id, {complete: true});
      PunchStore.emitChange();
      break;

    case PunchConstants.PUNCH_UPDATE_TEXT:
      text = action.text.trim();
      if (text !== '') {
        update(action.id, {text: text});
        PunchStore.emitChange();
      }
      break;

    case PunchConstants.PUNCH_DESTROY:
      destroy(action.id);
      PunchStore.emitChange();
      break;

    case PunchConstants.PUNCH_DESTROY_COMPLETED:
      destroyCompleted();
      PunchStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = PunchStore;
