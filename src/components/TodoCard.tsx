import React, { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Draggable } from "@hello-pangea/dnd";

import { Todo } from "../models/models";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completed: Todo[];
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({
  todo,
  setTodos,
  todos,
  setCompleted,
  completed,
  index,
}) => {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editStatus]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo))
    );
    setEditStatus(false);
  };

  const handleDone = (id: number) => {
    const update = todos.find((todo) => todo.id === id);
    setCompleted([...completed, { ...update!, isDone: !update?.isDone }]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Draggable index={index} draggableId={todo.id.toString()}>
      {(provided) => (
        <form
          className={`flex bg-gray-50 rounded-lg w-[80dvw] sm:w-[40dvw] md:w-[26dvw] py-2 px-3 justify-between items-center`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {editStatus ? (
            <input
              className="md:w-[28dvw] w-[25dvw] sm:w-[26dvw] focus:outline-none"
              type="text"
              ref={inputRef}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : todo.isDone ? (
            <s className="text-gray-600">{todo.todo}</s>
          ) : (
            <p className="text-gray-600">{todo.todo}</p>
          )}

          <div className="flex flex-row justify-center items-center gap-2">
            <MdEdit onClick={() => setEditStatus(true)} />
            <MdDelete onClick={() => handleDelete(todo.id)} />
            {todo.isDone ? (
              <RxCross2 onClick={() => handleDone(todo.id)} />
            ) : (
              <MdOutlineDone onClick={() => handleDone(todo.id)} />
            )}
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default TodoCard;
