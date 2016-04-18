import { APP_NAVIGATE } from '../actions/app';

const INITIAL_STATE = {
  scene: 'time-clock',  // the initial scene
  items: [],
  itemsFetching: false   // to display a 'loading..' when fetching
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // change the scene the main app is showing (home, about, devices)
    case APP_NAVIGATE:
      return { ...state, scene: action.payload};

    // do nothing
    default:
      return state;
  }
}
