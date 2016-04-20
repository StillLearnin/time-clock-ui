import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import each reducer
import app from './app';             // this will then be available as state.app

// combine all reducers, each one will then be available as state.someReducer
const myReducers = combineReducers({
  app,
  form: formReducer, // this is required by redux-form
});

export default myReducers;
