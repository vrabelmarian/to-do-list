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

  function toggleComplete(id) {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, completed: !todo.completed} : todo))
  }

  function deleteToDos(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Be productive!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <ToDo task={todo} key={index}
              toggleComplete={toggleComplete}
              deleteToDos={deleteToDos} />
      ))}
    </div>
  )
}