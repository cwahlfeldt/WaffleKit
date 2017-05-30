//
// actions file

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
let nextId = 0;
export function addTodo(text) {
  console.log('Add Todo Dude');
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  };
}

export function toggleTodo(id) {
  console.log('Toggle Todo Dude');
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function setVisibilityFilter(filter) {
  console.log('setVisibilityFilter Dude');
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
