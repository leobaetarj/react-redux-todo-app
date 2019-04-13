import React from 'react';
import { AddTodoForm } from '../../containers/AddTodoForm/AddTodoForm';
import { TodoList } from '../../containers/TodoList/TodoList';

export const TodoApp = () => (
  <div className="todo-app">
    <h1>TodoApp</h1>
    <AddTodoForm />
    <TodoList />
  </div>
);
