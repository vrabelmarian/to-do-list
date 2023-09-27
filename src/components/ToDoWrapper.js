import React, { useState } from 'react'
import { TodoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo';

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ])
  }

  return (
    <div className='TodoWrapper'>
      <h1>Be productive!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <ToDo task={todo} key={index} />
      ))}
    </div>
  )
}