import React from 'react'

const TodoCard = (props) => {
  const {children,handleDelete,index,handleEdit} = props
  return (
    <li>
      {children}
      <div className='container'>
           <button onClick={()=>{
            handleEdit(index)
           }}>
           <i class="fa-regular fa-pen-to-square"></i>
           </button>
         
       <button onClick={()=>{handleDelete(index)}}>
       <i class="fa-solid fa-trash"></i>
       </button>
          
      </div>
    </li>
  )
}

export default TodoCard