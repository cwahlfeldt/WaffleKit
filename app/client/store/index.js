//
// store file

import { createStore } from 'redux';
import todoApp from '../reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../actions';

let store = createStore(todoApp);

export default store;
