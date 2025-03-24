import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";





export interface Todo {
    id: string;
    name: string;
    status: boolean;
  }


  interface ContextType {
    todos: Todo[];
    addTodo: (event: React.KeyboardEvent) => void;
    removeTodoHandler: (todoId: string) => void;
    statusHandler: (todoId: string) => void;
    changeHandler: (todoId: string, newName: string) => void;
  }



export const TodoContext = createContext( {} as ContextType)



export function AppDataProvider({ children }: { children: ReactNode }) {

    const [todos,setTodos] = useState<Todo[]>( () => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : 
        [
            { id: uuidv4(), name: "Eating breakfast", status: false },
            { id: uuidv4(), name: "Going to gym", status: true },
            { id: uuidv4(), name: "Watching movie at 10", status: false },
          ];
    })


    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])


    function addTodo(event: React.KeyboardEvent) {
      if((event.target as HTMLInputElement).value == '' ) {
        return
      } else{
        if (event.key === 'Enter') {
            const newTodo = {
                id: uuidv4(),
                name: (event.target as HTMLInputElement).value,
                status: false
            }

            setTodos([newTodo,...todos]);

            (event.target as HTMLInputElement).value = "";
        }
      }
    }


    function removeTodoHandler(todoId: string) {
      const newTodos = todos.filter((item) => {
        return item.id != todoId;
      })

      setTodos(newTodos)
    }


    function statusHandler(todoId: string) {
        const updatedTodo = todos.map((item) => {
            if (item.id == todoId) {
                item.status = !item.status;
                return item;
              }
              return item;
        })

        setTodos(updatedTodo)
    }



    function changeHandler(todoId: string, newName: string) {
        const updatedTodos = todos.map((item) => {
            if (item.id == todoId) {
                item.name = newName
                return item;
            }
            return item;
        })

        setTodos(updatedTodos)
    }

    return(
        <TodoContext.Provider 
        value={{
         todos,
         addTodo,
         removeTodoHandler,
         statusHandler,
         changeHandler
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(TodoContext)
}