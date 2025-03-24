import { useGlobalContext } from "../context/TodoContext"
import TodoItem from "./TodoItem"



const TodoList = () => {

  const {todos} = useGlobalContext()

  return (
    <ul className="list-reset">

        {
            todos.map((todo) => (
               <TodoItem todo={todo} key={todo.id}/> 
            ))
        }
        
    </ul>
  )
}

export default TodoList