import { connect } from 'react-redux';
import { AddTodoForm as Component } from '../../components/TodoApp/components/AddTodoForm/AddTodoForm';
import { addTodo } from '../../actions/actionCreators';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(addTodo(text)),
});

export const AddTodoForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
