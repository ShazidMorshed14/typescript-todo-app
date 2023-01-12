import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField/InputField";
import { Todo } from "./components/Model/Model";
import ToDoList from "./components/ToDoList/ToDoList";

const App = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">TaskInk</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
