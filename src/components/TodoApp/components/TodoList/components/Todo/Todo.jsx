/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Todo = (props) => {
  const {
    id, text, completed, onClick,
  } = props;
  const classes = classNames('todo-item', {
    'todo-item-completed': completed,
  });

  return (
    <li key={id} className={classes} onClick={() => onClick(id)}>
      {text}
    </li>
  );
};

Todo.defaultProps = {
  completed: false,
  onClick: () => {},
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
};
