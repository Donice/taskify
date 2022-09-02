import React from 'react'
import { Todo } from "../model"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return ( //todos__single is for form //
    <form className='flex w-32 rounded-md p-5 mt-3.5 bg-gradient-to-r from-yellow-600 to-orange-700 md:w-full'>
      <span className=' flex flex-1 text-lg p-0.5 space-x-36 md:block focus:outline-0'>{todo.todo}</span>
      <div className='flex space-x-3'>
        <span className='cursor-pointer text-xl ml-2.5'>
          <AiFillEdit />
        </span>
        <span className='cursor-pointer text-xl ml-2.5'>
          <AiFillDelete />
        </span>
        <span className='cursor-pointer text-xl ml-2.5'>
          <MdDone />
        </span>
      </div>

    </form>
  )
}

export default SingleTodo