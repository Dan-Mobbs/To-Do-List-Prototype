import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    filterHandler();
    savetodos();
  }, [todos, status]);
  
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':  
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const savetodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      localStorage.setItem('todos', JSON.stringify(todos));
    };
  }

  return ( 
    <>
      <div className="App">
        <header>To Do List</header>
      </div>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos = {todos} filteredTodos={filteredTodos}/>
    </>  
  );
}

export default App;
