import { ADD_TODO, TOOGLE_TODO, REMOVE_TODO } from '../actions/actionTypes';

const todo = (state = {}, action) => {
  switch (action.type) {
    case TOOGLE_TODO:
      if (state.id !== action.payload.id) return state;

      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.payload.id, text: action.payload.text, completed: false }];
    case TOOGLE_TODO:
      return state.map(todoState => todo(todoState, action));
    case REMOVE_TODO:
      return state.filter(todoState => todoState.id !== action.payload.id);
    default:
      return state;
  }
};
