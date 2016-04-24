export const APP_NAVIGATE = 'APP_NAVIGATE';
export const CLOCK_PUNCHING = 'CLOCK_PUNCHING';
export const CLOCK_PUNCHED = 'CLOCK_PUNCHED';
export const DAYS_FETCHING = 'DAYS_FETCHING';
export const DAYS_FETCHED = 'DAYS_FETCHED';
export const DAYS_SAVING = 'DAYS_SAVING';
export const DAYS_SAVED = 'DAYS_SAVED';
import localforage from 'localforage';
import moment from 'moment';

function getDay(key, days) {
    for (var index = 0; index < days.length; index++) {
    if (days[index].key === key){
      return days[index];
    }
  }
}

function addPunch(day) {
  var lastPunch = day.punches.pop();
  if (lastPunch && lastPunch.out) {   //last punch already has punch out
    day.punches.push(lastPunch);  //so simply return punch to array
    lastPunch = createNewPunch();
  }
  else if (lastPunch) {               //there is a non-complete punch to finish
    lastPunch.out = moment().format("h:mm:ss");
    lastPunch.isChanged = true;
  }
  else {                              //need a totally new punch
    lastPunch = createNewPunch();
  }
  day.punches.push(lastPunch);
  return lastPunch;
}

function createNewPunch() {
  return {
    id: moment().format("h:mm:ss"),
    in : moment().format("h:mm:ss"),
    isNew: true,
    isChanged: true
  };
}
export function appNavigate(value) {
  return {
    type: APP_NAVIGATE,
    payload: value
  };
}

export function toggleCollapsed(day) {
  return function (dispatch) {
    localforage.getItem('days').then(function(days) {
      var d = getDay(day, days)
      if (d)
        d.isExpanded = !d.isExpanded
      return days
    }).then(function(days) {
        dispatch(saveDays(days))
        return days;
    }).catch(console.log.bind(console));
  }
}

export function punchClock() {
  return function (dispatch) {
    localforage.getItem('days').then(function(days) {
      dispatch(punching())
      if (!days)
        days = []

      var today = moment().format("dddd, MMMM D");
      var thisDay = getDay(today, days)
      var isNewDay = !thisDay;

      if (isNewDay) {
        thisDay = {
            key: today,
            date: today,
            isExpanded: true,
            total: {
              hours: 0,
              minutes: 0
            },
            punches: [],
            isNew: true,
            isChanged: true
        };
      }
      else {
        thisDay.isExpanded = true;
        thisDay.isChanged = true;
      }

      var lastPunch = addPunch(thisDay);
      var isPunchedIn = !lastPunch.out;

      if (isNewDay)
        days.push(thisDay);

      return { days: days, isPunchedIn: isPunchedIn };

    }).then(function(data) {
      dispatch(saveDays(data.days))
      dispatch(savePunchedIn(data.isPunchedIn))
      return data.isPunchedIn;
    }).then(function(isPunchedIn) {
      dispatch(punched(isPunchedIn))
      return isPunchedIn;
    }).catch(console.log.bind(console));
  }
}

export function punching() {
  return {
    type: CLOCK_PUNCHING
  };
}

export function punched(data) {
  return {
    type: CLOCK_PUNCHED,
    payload: data
  };
}

export function fetch() {
  return function (dispatch) {

    // show a loading
    dispatch(fetching())
    // async load
    localforage.getItem('days').then(
      (data) => dispatch(fetched(data))
    ).catch(console.log.bind(console));
  }
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

export function savePunchedIn(isPunchedIn) {
  return function (dispatch) {
    // async save
    localforage.setItem('isPunchedIn', isPunchedIn).catch(console.log.bind(console));
  }
}

export function saveDays(days) {
  return function (dispatch) {

    // show a saving
    dispatch(saving())

    // async save
    localforage.setItem('days', days).then(
      (days) => dispatch(saved(days))
    ).catch(console.log.bind(console));
  }
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

