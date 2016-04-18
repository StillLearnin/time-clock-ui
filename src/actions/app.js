export const APP_NAVIGATE = 'APP_NAVIGATE';
export const PUNCHES_FETCHING = 'PUNCHES_FETCHING';
export const PUNCHES_FETCHED = 'PUNCHES_FETCHED';

import localApi from '../libs/localApi';

// define a local db for devices (simulated async api)
let myAPI = new localApi(
  {
    tableName: 'days', // used as local storage key
    fields: {               // row structure (pre loaded for new item)
      Id: null,
      Date: "Monday April 11, 2016",
      IsExpanded: false,
      Total: {
        hours: 1,
        minutes: 0
      },
      punches: [
        {
          id: "asdfdf",
          in : "4:47",
          out: "8:30"
        },
        {
          id: "afasdf",
          in : "8:47",
          out: "9:30"
        }
    ]
    }
  });

export function appNavigate(value) {
  return {
    type: APP_NAVIGATE,
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

