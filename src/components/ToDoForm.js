import React from 'react'

export const ToDoForm = () => {
  return (
    <form className='ToDoForm'>
        <input
            type='text'
            className='todo-input'
            placeholder='What is the task for today?' />
        <button
            type='submit'
            className='todo-btn' >
            Add Task
        </button>
    </form>
  )
}
