import { APP_NAVIGATE } from '../actions/app';

const INITIAL_STATE = {
  scene: 'time-clock',  // the initial scene
  items: [{
    date: "Monday April 11, 2016",
    isExpanded: false,
    total: {
      hours: 1,
      minutes: 0
    },
    punches: [{
      id: "asdfdf",
      in : "4:47",
      out: "8:30"
    }, {
      id: "afasdf",
      in : "8:47",
      out: "9:30"
    }]
  }, {
    date: "Tuesday April 12, 2016",
    isExpanded: false,
    total: {
      hours: 5,
      minutes: 15
    },
    punches: [{
      id: "asdfdf",
      in : "4:47",
      out: "8:30"
    }, {
      id: "afasdf",
      in : "8:47",
      out: "9:30"
    }, {
      id: "asdfaf",
      in : "10:00",
      out: "10:40"
    }, {
      id: "asdfas",
      in : "10:47",
      out: "12:50"
    }]
  }, {
    date: "Wednesday April 13, 2016",
    isExpanded: true,
    total: {
      hours: 5,
      minutes: 0
    },
    punches: [{
      id: "asdfd",
      in : "8:30",
      out: "12:30"
    }, {
      id: "sdfas",
      in : "1:00",
      out: "-"
    }]
  }]
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
