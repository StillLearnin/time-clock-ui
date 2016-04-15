/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * PunchConstants
 */

var keyMirror = require('keymirror');

module.exports = keyMirror({
  PUNCH_CREATE: null,
  PUNCH_COMPLETE: null,
  PUNCH_DESTROY: null,
  PUNCH_DESTROY_COMPLETED: null,
  PUNCH_TOGGLE_COMPLETE_ALL: null,
  PUNCH_UNDO_COMPLETE: null,
  PUNCH_UPDATE_TEXT: null
});
