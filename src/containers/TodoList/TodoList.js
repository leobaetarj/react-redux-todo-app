import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { TodoList as Component } from '../../components/TodoApp/components/TodoList/TodoList';
import { toogleTodo } from '../../actions/actionCreators';
import { SHOW_COMPLETED } from '../../components/TodoApp/components/Filter/Filter';

const getStateTodos = state => state.todos;
const getStateVisibilityFilter = state => state.visibilityFilter;

const getTodos = createSelector(
  [getStateTodos, getStateVisibilityFilter],
  (todos, visibilityFilter) => {
    if (visibilityFilter === SHOW_COMPLETED) {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  },
);

const mapStateToProps = state => ({
  ...state,
  todos: getTodos(state),
});
const mapDispatchToProps = dispatch => ({
  onToogleTodo: id => dispatch(toogleTodo(id)),
});

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
