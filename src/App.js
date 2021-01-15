import "./App.css";
import Todolist from "./components/todo/Todolist";
import AddTodo from "./components/todo/AddTodo";
import { Fragment, useState } from "react";
import Library from "./components/library/Library";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const deleteElement = (id, e) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  };

  return (
    <Fragment>
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} deleteElement={deleteElement} />
      <Library />
    </Fragment>
  );
}

export default App;
