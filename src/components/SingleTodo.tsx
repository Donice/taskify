import React, { useEffect, useRef, useState } from 'react'
import { Todo } from "../model"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) =>
      todo.id === id ?
        {
          ...todo,
          isDone: !todo.isDone
        } : todo
    ))
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) =>
      todo.id !== id
    ))
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map((todo) => (
      todo.id === id
        ? { ...todo, todo: editTodo }
        : todo
    )));
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  return ( //todos__single is for form //
    <form
      className='flex w-full rounded-xl p-5 mt-3.5 bg-gradient-to-r from-yellow-600 to-orange-700 sm:w-full '
      onSubmit={(e) => handleEdit(e, todo.id)}
    >

      {
        edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="w-full py-0.5 px-5 border-0 text-xl focus:outline-none"
          />

        ) : (
          todo.isDone ? (
            <s className=' flex flex-1 text-lg p-0.5 space-x-36 sm:block focus:outline-0'>{todo.todo}</s>
          ) : (
            <span className=' flex flex-1 text-lg p-0.5 space-x-36 sm:block focus:outline-0'>{todo.todo}</span>
          )
        )
      }

      <div className='flex space-x-3'>
        <span
          className='cursor-pointer text-xl ml-2.5'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className='cursor-pointer text-xl ml-2.5'
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span
          className='cursor-pointer text-xl ml-2.5'
          onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </span>
      </div>

    </form >
  )
}

export default SingleTodo