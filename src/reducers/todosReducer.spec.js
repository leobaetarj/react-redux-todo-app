import { todos } from './todosReducer';
import { TOOGLE_TODO, ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

describe('todos reducer', () => {
  it('returns initial state when current state is undefined', () => {
    const defaultState = [];

    const state = [];
    const action = { type: 'WHATEVER' };

    const stateAfter = todos(state, action);

    expect(stateAfter).toEqual(defaultState);
  });

  it('returns current state when action type is unknown', () => {
    const stateBefore = [{ id: 'id1', text: 'hey', completed: true }];
    const action = { type: 'UNKNOWN_ACTION' };
    const stateAfter = todos(stateBefore, action);

    expect(stateAfter).toEqual(stateBefore);
  });

  it('returns a state with a new todo when action type is ADD_TODO', () => {
    const action = { type: ADD_TODO, payload: { id: 'id1', text: 'some text' } };
    const todo = { ...action.payload, completed: false };
    const currentState = [];

    const nextState = todos(currentState, action);

    expect(nextState).toEqual([...currentState, todo]);
  });

  it('returns a state with todo completed when todo is not completed and action type is TOOGLE_TODO', () => {
    const action = { type: TOOGLE_TODO, payload: { id: 'id1' } };
    const currentState = [
      {
        id: 'id1',
        text: 'Whatever',
        completed: false,
      },
    ];
    const expectedState = [
      {
        ...currentState[0],
        completed: true,
      },
    ];

    const nextState = todos(currentState, action);

    expect(nextState).toEqual(expectedState);
  });

  it('returns a state with todo not completed when todo is completed and action type is TOOGLE_TODO', () => {
    const action = { type: TOOGLE_TODO, payload: { id: 'id1' } };
    const currentState = [
      {
        id: 'id1',
        text: 'Whatever',
        completed: true,
      },
    ];
    const expectedState = [
      {
        ...currentState[0],
        completed: false,
      },
    ];

    const nextState = todos(currentState, action);

    expect(nextState).toEqual(expectedState);
  });

  it('returns a state without todo when action type is REMOVE_TODO', () => {
    const action = {
      type: REMOVE_TODO,
      payload: { id: 'id1' },
    };
    const currentState = [
      {
        id: 'id1',
        text: 'Whatever',
        completed: true,
      },
    ];
    const expectedState = [];

    const nextState = todos(currentState, action);

    expect(nextState).toEqual(expectedState);
  });
});
