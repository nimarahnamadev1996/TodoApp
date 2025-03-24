import MainTodo from "./components/MainTodo"
import { AppDataProvider } from "./context/TodoContext"

const App = () => {
  return (
    <>
     <AppDataProvider>
       <MainTodo/>
     </AppDataProvider>
    </>
  )
}

export default App