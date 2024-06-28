import React from "react";
import { Droppable } from "@hello-pangea/dnd";

import { Todo } from "../models/models";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completed: Todo[];
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completed,
  setCompleted,
}) => {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-6">
      <Droppable droppableId="ActiveTasks" type="group">
        {(provided) => (
          <div
            className="flex flex-col gap-3 w-[40dvw] items-center"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-center font-semibold text-xl text-green-300 underline">
              Active Tasks
            </span>
            {todos.map((todo, index) => (
              <TodoCard
                key={todo.id}
                index={index}
                todo={todo}
                setTodos={setTodos}
                todos={todos}
                completed={completed}
                setCompleted={setCompleted}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="RemoveTasks" type="group">
        {(provided) => (
          <div
            className="flex flex-col gap-3 w-[40dvw] items-center"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-center font-semibold text-xl text-red-300 underline">
              Completed Tasks
            </span>
            {completed.map((todo, index) => (
              <TodoCard
                key={todo.id}
                index={index}
                todo={todo}
                setTodos={setCompleted}
                todos={completed}
                completed={todos}
                setCompleted={setTodos}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
