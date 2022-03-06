import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "This is a sample text", isDone: false },
  ]);
   
  const addTodo = text => {
    const newTodo = [...todos, {text}]
    setTodos(newTodo)
  }

  const markTodo = index => {
    const newTodo = [...todos];
    newTodo[index].isDone = true;
    setTodos(newTodo)
  }
  const removeTodo = index => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(newTodo)
  }
  return (
    <div className="App">
      <Todo addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <TodoList key={index}
        index= {index}
        todo={todo}
        markTodo={markTodo}
        removeTodo={removeTodo}/>
      ))}
    </div>
  );
}

export default App;
