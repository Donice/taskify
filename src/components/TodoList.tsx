import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from "./../model";
import SingleTodo from "./SingleTodo"

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {

  return (
    <div className="flex w-85 mt-2.5 justify-between items-start md:block "> {/* container */}
      <Droppable droppableId='TodosList'>
        {(provided, snapshot) => (
          <div
            className={`flex w-47 flex-col m-3 p-3 rounded-xl bg-teal-400 md:w-95 ${snapshot.isDraggingOver ? "bg-teal-600" : " "}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-gray-50 text-xl font-semibold">
              Active Tasks
            </span>
            {
              todos.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId='TodosRemove'>
        {(provided, snapshot) => (
          <div
            className={`flex w-47 flex-col m-3 p-3 rounded-xl bg-red-700 md:w-95  ${snapshot.isDraggingOver ? "bg-red-900" : " "}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-gray-50 text-xl font-semibold">
              Completed Tasks
            </span>
            {
              completedTodos.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todo={todo}
                  key={todo.id}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                />
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>


    </div>
  )
}

export default TodoList