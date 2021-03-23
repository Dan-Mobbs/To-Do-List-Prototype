import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="App">
        <header>To Do List</header>
      </div>
      <Form />
      <TodoList />
    </>  
  );
}

export default App;
