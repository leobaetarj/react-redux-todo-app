import { TOOGLE_TODO } from '../actions/actionTypes';

export const todo = (state = {}, action) => {
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
