import { connect } from 'react-redux';
import { TodoList as Component } from '../../components/TodoApp/components/TodoList/TodoList';
import { toogleTodo } from '../../actions/actionCreators';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onToogleTodo: id => dispatch(toogleTodo(id)),
});

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
