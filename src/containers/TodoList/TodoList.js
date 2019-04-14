import { connect } from 'react-redux';
import { TodoList as Component } from '../../components/TodoApp/components/TodoList/TodoList';
import { toogleTodo } from '../../actions/actionCreators';
import { SHOW_COMPLETED } from '../../components/TodoApp/components/Filter/Filter';

const mapStateToProps = (state) => {
  if (state.visibilityFilter === SHOW_COMPLETED) {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.completed),
    };
  }
  return state;
};
const mapDispatchToProps = dispatch => ({
  onToogleTodo: id => dispatch(toogleTodo(id)),
});

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
