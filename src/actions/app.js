export const APP_NAVIGATE = 'APP_NAVIGATE';
export const PUNCHES_FETCHING = 'PUNCHES_FETCHING';
export const PUNCHES_FETCHED = 'PUNCHES_FETCHED';


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

