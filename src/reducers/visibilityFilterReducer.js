import { SET_VISIBILITY_FILTER, FILTERS } from '../actions/actionTypes';

const { SHOW_ALL } = FILTERS;

export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};
