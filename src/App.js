import React,{useState, useEffect} from 'react'

import Form from "./components/Form"
import TodoList from "./components/TodoList"

const App = () => {
 
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])


  useEffect(()=>{
    filterHandler()
  },[todos, status])


  const filterHandler = (e)=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo)=> todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo)=>todo.completed === false))
        break;
      default:
         setFilteredTodos(todos)
        break
    }
  }

  return (
   <div className='App'>
    <header>
      <h1>Todo List </h1>
    </header>
    <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText = {inputText} setStatus={setStatus} />
    <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>

   </div>
 )
}

export default App