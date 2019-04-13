import React from 'react';
import PropTypes from 'prop-types';

export const AddTodoForm = ({ onAddTodo }) => {
  let input;
  return (
    <>
      <input
        name="addTodo"
        ref={(node) => {
          input = node;
        }}
      />
      <button
        type="button"
        onClick={() => {
          onAddTodo(input.value);
          input.value = '';
        }}
      >
        Add
      </button>
    </>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
