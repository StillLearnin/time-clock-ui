import {
  APP_NAVIGATE,
  CLOCK_PUNCHING,
  CLOCK_PUNCHED,
  DAYS_FETCHING,
  DAYS_FETCHED,
  DAYS_SAVING,
  DAYS_SAVED,
} from '../actions/app';

const INITIAL_STATE = {
  scene: 'home',        // the initial scene
  days: [],
  daysFetching: false,  // to display a 'loading..' when fetching
  punching: false,      // in the middle of punching process
  daysSaving: false,
  isPunchedIn: false
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
      return { ...state, daysFetching: false, days: action.payload };

    case CLOCK_PUNCHING:
      return { ...state, punching: true };

    case CLOCK_PUNCHED:
      return { ...state, punching: false, isPunchedIn: action.payload };

    case DAYS_SAVING:
      return { ...state, daysSaving: true };

    case DAYS_SAVED:
      return { ...state, daysSaving: false, days: action.payload};

    // do nothing
    default:
      return state;
  }
}
