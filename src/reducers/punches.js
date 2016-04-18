import {
  PUNCHES_NAVIGATE,
  PUNCHES_FETCHING,
  PUNCHES_FETCHED
} from '../actions/devices';

const INITIAL_STATE = {
  scene: 'log', // active scene  displayed by the 'devices' component
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
  }], // fetched list of devices
  itemsFetching: false, // to display a 'loading..' when fetching
  item: null, // stores the loaded item to be used on the form
  simulated: false, // if is simulating remote calls with a delay
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // change the scene (form / list)
    case PUNCHES_NAVIGATE:
      return {...state,
        scene: action.payload
      };

      // the list is being loaded, show the loading.. and reset the items
    case PUNCHES_FETCHING:
      return {...state,
        itemsFetching: true,
        items: []
      };

      // hide the loading and set the loaded data into items
    case PUNCHES_FETCHED:
      return {...state,
        itemsFetching: false,
        items: action.payload
      };

      // do nothing
    default:
      return state;
  }
}