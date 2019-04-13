import React from 'react';
import PropTypes from 'prop-types';

export const AddTodoForm = ({ onAddTodo }) => {
  const textInput = React.createRef();

  const clearText = () => {
    textInput.current.value = '';
  };

  const handleClick = () => {
    const { value } = textInput.current;
    if (value !== '') {
      onAddTodo(value);
      clearText();
    }
  };

  return (
    <>
      <input name="addTodo" ref={textInput} />
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
