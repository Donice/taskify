import React, { useState } from "react";
import InputFeilds from "./components/InputFeilds";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); // creating an array of a type or an interface

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false
        }
      ]);
      setTodo("");
    }
  }

  console.log(todos)

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-sky-600">
      <span className="text-4xl text-center text-gray-50 mx-0 my-8 z-1 md:text-3xl my-4">Taskify</span>
      <InputFeilds
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;