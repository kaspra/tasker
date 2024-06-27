import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

import { Todo } from "../models/models";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="flex bg-gray-50 rounded-lg w-[80dvw] sm:w-[40dvh] py-2 px-3 justify-between items-center">
      {todo.isDone ? (
        <s className="text-gray-600">{todo.todo}</s>
      ) : (
        <p className="text-gray-600">{todo.todo}</p>
      )}
      <div className="flex flex-row justify-center items-center gap-2">
        <MdEdit className="hover:cursor-pointer" />
        <MdDelete className="hover:cursor-pointer" />
        <MdOutlineDone
          className="hover:cursor-pointer"
          onClick={() => handleDone(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoCard;
