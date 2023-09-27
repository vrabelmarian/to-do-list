import React, { useState } from 'react'
import { TodoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo';
import { EditToDo } from './EditToDo';

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, completed: !todo.completed} : todo))
  }

  const deleteToDos = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editToDo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, isEditing: !todo.isEditing } : todo))
  }

  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Be productive!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditToDo editToDo={editTask} task={todo}/>
        ) : (
          <ToDo task={todo} key={index}
              toggleComplete={toggleComplete}
              deleteToDos={deleteToDos}
              editToDo={editToDo} />
      )
      ))}
    </div>
  )
}