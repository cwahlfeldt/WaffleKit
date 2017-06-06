//
// actions file

import Common from '../lib/common';

// action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// action creators
export const addTodo = text => ({
  type: ADD_TODO,
  id: Common.makeId(),
  text,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
