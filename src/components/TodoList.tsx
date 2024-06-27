import React from "react";
import { Todo } from "../models/models";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="mt-6 flex flex-wrap row gap-6 justify-center">
      {todos.map((todo) => (
        <TodoCard todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
