import React, { useState } from 'react'
import { TodoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo} />
    </div>
  )
}