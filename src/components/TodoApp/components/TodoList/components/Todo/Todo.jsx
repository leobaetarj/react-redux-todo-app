import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Todo = (props) => {
  const {
    id, text, completed, onToogleTodo,
  } = props;
  const classes = classNames('todo-item', {
    'todo-item-completed': completed,
  });

  return (
    <li key={id} className={classes} onClick={() => onToogleTodo(id)}>
      {text}
    </li>
  );
};

Todo.defaultProps = {
  completed: false,
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onToogleTodo: PropTypes.func.isRequired,
};
