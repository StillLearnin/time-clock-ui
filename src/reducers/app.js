import {
  APP_NAVIGATE,
  DAYS_FETCHING,
  DAYS_FETCHED,
  DAYS_SAVING,
  DAYS_SAVED,
} from '../actions/app';

const INITIAL_STATE = {
  scene: 'home',  // the initial scene
  days: [],
  daysFetching: false   // to display a 'loading..' when fetching
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // change the scene the main app is showing (home, about, devices)
    case APP_NAVIGATE:
      return { ...state, scene: action.payload};

    // the list is being loaded, show the loading.. and reset the days
    case DAYS_FETCHING:
      return { ...state, daysFetching: true, days: [] };

    // hide the loading and set the loaded data into days
    case DAYS_FETCHED:
      return { ...state, daysFetching: false, days: action.payload};

    // the list is being loaded, show the loading.. and reset the days
    case DAYS_SAVING:
      return { ...state, daysFetching: true, days: [] };

    // hide the loading and set the loaded data into days
    case DAYS_SAVED:
      return { ...state, daysFetching: false, days: action.payload};

    // do nothing
    default:
      return state;
  }
}
