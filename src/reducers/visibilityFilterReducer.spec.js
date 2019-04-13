import { visibilityFilter } from './visibilityFilterReducer';

describe('visibilityFilter reducer', () => {
  it('returns initial state when current state is undefined', () => {
    const defaultState = 'SHOW_ALL';
    const action = { type: 'WHATEVER' };
    const stateAfter = visibilityFilter(undefined, action);

    expect(stateAfter).toEqual(defaultState);
  });

  it('returns current state when action type is unknown', () => {
    const stateBefore = 'SHOW_COMPLETED';
    const action = { type: 'WHATEVER' };
    const stateAfter = visibilityFilter(stateBefore, action);

    expect(stateAfter).toEqual(stateBefore);
  });

  it('returns state equals action payload filter when action type is SET_VISIBILITY_FILTER', () => {
    const state = '';
    const action = { type: 'SET_VISIBILITY_FILTER', payload: { filter: 'SHOW_COMPLETED' } };

    const nextState = visibilityFilter(state, action);

    expect(nextState).toEqual(action.payload.filter);
  });
});
