import React, { useState } from 'react'

const TodoInput = (props) => {
  const {handleAddTodos,todoValue,setTodoValue} = props

 
  return (
    <header>
      <input className='box' type="text" placeholder='enter...' value={todoValue} onChange={(e)=>{
        setTodoValue(e.target.value)
      }} />
      <button onClick={()=>{
        handleAddTodos(todoValue)
        setTodoValue('')
      }}>add</button>
    </header>
  )
}

export default TodoInput