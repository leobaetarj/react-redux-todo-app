import { v4 } from 'uuid';
import {
  SET_VISIBILITY_FILTER, ADD_TODO, TOOGLE_TODO, REMOVE_TODO,
} from './actionTypes';

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: v4(),
    text,
  },
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter },
});

export const toogleTodo = id => ({
  type: TOOGLE_TODO,
  payload: {
    id,
  },
});
