import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

import { Todo } from "../models/models";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, setTodos }) => {
  return (
    <div className="flex bg-gray-50 rounded-lg w-[100dvh] sm:w-[40dvh] py-2 px-3 justify-between items-center">
      <p className="text-gray-600">{todo.todo}</p>
      <div className="flex flex-row justify-center items-center gap-2">
        <MdEdit className="hover:cursor-pointer" />
        <MdDelete className="hover:cursor-pointer" />
        <MdOutlineDone className="hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default TodoCard;
