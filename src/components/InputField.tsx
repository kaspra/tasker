import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodos: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodos }) => {
  return (
    <form
      className="relative mt-4 flex w-[90dvw] md:w-96 items-center"
      onSubmit={handleAddTodos}
    >
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-[100dvw] rounded-full p-3 border-none placeholder:text-gray-500 focus:outline-none"
      />
      <button
        type="submit"
        className="absolute right-0 border-none rounded-full bg-blue-500 text-white font-semibold p-2 mr-2 hover:bg-blue-700"
      >
        GO
      </button>
    </form>
  );
};

export default InputField;
