import React, { useState } from "react";
import InputFeilds from "./components/InputFeilds";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); // creating an array of a type or an interface
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

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
    <DragDropContext onDragEnd={() => { }}>
      <div className="w-screen h-screen flex flex-col items-center bg-gradient-to-r from-gray-900 to-teal-900">
        <span className="text-4xl text-center text-gray-50 mx-0 my-8 z-1 sm:text-3xl my-4">Taskify</span>
        <InputFeilds
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}

        />

      </div>
    </DragDropContext>

  );
}

export default App;