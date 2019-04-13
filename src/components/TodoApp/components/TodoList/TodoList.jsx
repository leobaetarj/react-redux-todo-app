import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './components/Todo/Todo';

export const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(Todo.propTypes)).isRequired,
};
