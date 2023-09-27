import React, { useState } from 'react'

export const ToDoForm = () => {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(value);
  }

  return (
    <form className='ToDoForm' onSubmit={handleSubmit} >
        <input
            type='text'
            className='todo-input'
            placeholder='What is the task for today?' 
            onChange={ (e) => setValue(e.target.value)}/>
        <button
            type='submit'
            className='todo-btn'>
            Add Task
        </button>
    </form>
  )
}
