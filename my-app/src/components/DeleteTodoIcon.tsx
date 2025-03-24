import React from 'react'
import { Todo, useGlobalContext } from '../context/TodoContext'

const DeleteTodoIcon = ({todo} : {todo: Todo}) => {

    const  {removeTodoHandler} = useGlobalContext()

  return (
    <svg 
     xmlns="http://www.w3.org/2000/svg" 
     className="w-5 h-5 text-red-700" 
     fill="none" viewBox="0 0 24 24"
     onClick={() => removeTodoHandler(todo.id)}
    stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
  )
}

export default DeleteTodoIcon