export const PUNCHES_NAVIGATE = 'PUNCHES_NAVIGATE';
export const PUNCHES_FETCHING = 'PUNCHES_FETCHING';
export const PUNCHES_FETCHED = 'PUNCHES_FETCHED';
export const PUNCHES_DELETING = 'PUNCHES_DELETING';

import localApi from '../libs/localApi';

// define a local db for devices (simulated async api)
let myAPI = new localApi(
  {
    tableName: 'myDevices', // used as local storage key
    fields: {               // row structure (pre loaded for new item)
      _id: null,            // row key (required)
      title: 'New Device',
      port: '*',
    },
    delay: 0,               // simulated delay
  }
);

export function navigate(value) {
  return {
    type: PUNCHES_NAVIGATE,
    payload: value
  };
}

export function fetch() {
  return function (dispatch) {

    // show a loading
    dispatch(fetching())

    // async load
    myAPI.getAll().then(
      (data) => dispatch(fetched(data))
    );
  }

}

export function fetching() {
  return {
    type: PUNCHES_FETCHING
  };
}

export function fetched(data) {
  return {
    type: PUNCHES_FETCHED,
    payload: data
  };
}

export function fetchOne(id = null) {
  return function (dispatch) {

    // show a loading
    dispatch(fetchingOne())

    // async load
    myAPI.get(id).then(
      (data) => dispatch(fetchedOne(data))
    );
  }
}

export function fetchingOne() {
  return {
    type: PUNCHES_FETCHING_ONE
  };
}

export function fetchedOne(data) {
  return {
    type: PUNCHES_FETCHED_ONE,
    payload: data
  };
}

export function save(values, callback) {
  return function (dispatch) {
    // return the save promise
    return myAPI.save(values);
  }

}

export function remove(id = null) {
  return function (dispatch) {

    // async delete
    myAPI.remove(id).then(
      (data) => dispatch(fetched(data))
    );
  }
}

export function setSimulation(status) {
  if (status) {
    myAPI.delay = 700;
  } else {
    myAPI.delay = 0;
  }

  return {
    type: PUNCHES_SET_SIMULATION,
    payload: status
  };
}
