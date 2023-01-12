import React from "react";
import { Todo } from "../Model/Model";
import SingleTodo from "../SingleTodo/SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((t) => (
        <SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default ToDoList;
