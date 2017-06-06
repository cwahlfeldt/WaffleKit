//
// Main reducer file

import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

export const getVisibleTodos = (state, filter) => (
  fromTodos.getVisibleTodos(state, filter)
);

const todoApp = combineReducers({
  todos,
});

export default todoApp;
