import React, { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

import InputField from "./components/InputField";
import { Todo } from "./models/models";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState<Todo[]>([]);

  const handleAddTodos = (e: React.FormEvent): void => {
    e.preventDefault();

    if (todo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    let add: Todo;
    let active: Todo[] = todos;
    let complete: Todo[] = completed;

    // Getting from Source
    if (source.droppableId === "ActiveTasks") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Adding to Destination
    if (destination.droppableId === "ActiveTasks") {
      add.isDone = false;
      active.splice(destination.index, 0, add);
    } else {
      add.isDone = true;
      complete.splice(destination.index, 0, add);
    }

    setTodos(active);
    setCompleted(complete);
    localStorage.setItem("active", JSON.stringify(active));
    localStorage.setItem("completed", JSON.stringify(complete));
  };

  React.useEffect(() => {
    localStorage.setItem("active", JSON.stringify(todos));
  }, [todos]);

  React.useEffect(() => {
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [completed]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-grow justify-start items-center  py-10 px-12 flex-col w-[100vw] min-h-[100vh]">
        <h1 className="font-bold text-3xl uppercase text-[#16a34a]">Tasker</h1>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAddTodos={handleAddTodos}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completed={completed}
          setCompleted={setCompleted}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
