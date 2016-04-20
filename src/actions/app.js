export const APP_NAVIGATE = 'APP_NAVIGATE';
export const CLOCK_PUNCHING = 'CLOCK_PUNCHING';
export const CLOCK_PUNCHED = 'CLOCK_PUNCHED';
export const DAYS_FETCHING = 'DAYS_FETCHING';
export const DAYS_FETCHED = 'DAYS_FETCHED';
export const DAYS_SAVING = 'DAYS_SAVING';
export const DAYS_SAVED = 'DAYS_SAVED';
import localforage from 'localforage';
import moment from 'moment';

export function appNavigate(value) {
  return {
    type: APP_NAVIGATE,
    payload: value
  };
}

export function punchClock() {
  return function (dispatch) {
    dispatch(punching())
    localforage.getItem('days').then(function(days) {
      if (!days)
        days = []

      var existingDay;
      var today = moment().format("dddd, MMMM D");
      for (var index = 0; index < days.length; index++) {
        if (days[index].date === today){
          existingDay = days[index];
          break;
        }
      }
      if (!existingDay)
        existingDay = {
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
      else {
        existingDay.isExpanded = true;
        existingDay.isChanged = true;
      }

      existingDay.punches.push(
        {
          id: moment().format("h:mm:ss"),
          in : moment().format("h:mm:ss"),
          out: moment().format("h:mm:ss"),
          isNew: true,
          isChanged: true
        }
      );

      if (existingDay.isNew == true)
        days.push(existingDay);

      dispatch(saveDays(days))
    }).catch(function (err) {
      // we got an error
    });

    dispatch(punched(null))
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
    ).catch(function (err) {
      // we got an error
    });
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

export function saveDays(days) {
  return function (dispatch) {

    // show a loading
    dispatch(saving())

    // async load
    localforage.setItem('days', days).then(
      (days) => dispatch(saved(days))
    ).catch(function (err) {
      // we got an error
    });
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

