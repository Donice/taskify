import React from 'react'
import "./../index.css"

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

// const InputFeilds = ({ todo, setTodo }: Props) => {
const InputFeilds: React.FC<Props> = () => { // another way to declare a function
  return (
    <form className='flex w-4/5 relative items-center'>

      <input
        type="input"
        placeholder='Enter a task'
        className='w-full rounded-full py-4 px-5 border-0 text-2xl focus:outline-none'
      />

      <button
        type='submit'
        className='absolute w-12 h-12 m-3 rounded-full right-0 border-none text-base bg-sky-600 text-gray-50 hover:bg-sky-400 hover:scale-75'
      >
        Go
      </button>

    </form>
  )
}

export default InputFeilds