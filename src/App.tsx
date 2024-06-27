import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./models/models";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodos = (e: React.FormEvent): void => {
    e.preventDefault();

    if (todo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="w-[100vw] h-[100dvh] flex flex-grow justify-start items-center bg-blue-600 py-10 px-12 flex-col">
      <h1 className="font-bold text-3xl uppercase text-white">Tasker</h1>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAddTodos={handleAddTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
