import { todo } from './todoReducer';
import { ADD_TODO, TOOGLE_TODO, REMOVE_TODO } from '../actions/actionTypes';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.payload.id, text: action.payload.text, completed: false }];
    case TOOGLE_TODO:
      return state.map(todoState => todo(todoState, action));
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};
