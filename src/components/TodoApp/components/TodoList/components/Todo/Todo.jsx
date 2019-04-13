import React from 'react';
import PropTypes from 'prop-types';

export const Todo = (props) => {
  const { id, text, completed } = props;
  return (
    <li key={id} className="todo-item">{text}</li>
  );
};

Todo.defaultProps = {
  completed: false,
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};
