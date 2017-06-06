//
// Main reducer file

import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from '../actions';

const number = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const counterApp = combineReducers({
  number,
});

export default counterApp;
