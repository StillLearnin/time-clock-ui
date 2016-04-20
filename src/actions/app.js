export const APP_NAVIGATE = 'APP_NAVIGATE';
export const DAYS_FETCHING = 'DAYS_FETCHING';
export const DAYS_FETCHED = 'DAYS_FETCHED';
export const DAYS_SAVING = 'DAYS_SAVING';
export const DAYS_SAVED = 'DAYS_SAVED';
import localForage from 'localforage'

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
    localForage.getItem('days').then(
      (data) => dispatch(fetched(data))
    ).catch(function (err) {
      // we got an error
    });
  }
}

export function saveDays(days) {
  return function (dispatch) {

    // show a loading
    dispatch(saving())

    // async load
    localForage.setItem('days', days).then(function () {
      return localForage.getItem('days');
    }).then(function (data) {
      // we got our data
      (data) => dispatch(saved(data))
    }).catch(function (err) {
      // we got an error
    });
  }
}

export function savePunch(punch) {
  // var days = localForage.getItem('days');
  // if (!days)
  // localForage.setItem('days', days)
}

export function fetching() {
  return {
    type: DAYS_FETCHING
  };
}

export function fetched(data) {
  return {
    type: DAYS_FETCHED,
    payload: data
  };
}

export function saving() {
  return {
    type: DAYS_SAVING
  };
}

export function saved(data) {
  return {
    type: DAYS_SAVED,
    payload: data
  };
}

