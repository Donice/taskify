import React from 'react'
import { Todo } from "./../model";
import SingleTodo from "./SingleTodo"

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  // return (
  //   <div className='flex justify-evenly w-4/5 flex-wrap '>
  //     {
  //       todos.map(todo => (
  //         <SingleTodo
  //           todo={todo}
  //           key={todo.id}
  //           todos={todos}
  //           setTodos={setTodos}
  //         />
  //       ))
  //     }
  //   </div>
  // )

  return (
    <div className="flex w-80 mt-2.5 justify-between items-start md:block "> {/* container */}
      <div className="flex w-47 flex-col m-3 p-4 bg-teal-400 md:w-95"> {/* todos */}
        <span className="text-gray-50 text-2xl font-bold">
          Active Tasks
        </span>
        {
          todos.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        }
      </div>

      <div className="flex w-47 flex-col m-3 p-4 bg-teal-400 md:w-95"> {/* todo remove */}
        <span className="text-gray-50 text-2xl font-bold">
          Completed Tasks
        </span>
        {
          todos.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList