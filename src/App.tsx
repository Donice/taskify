import React, { useState } from "react";
import InputFeilds from "./components/InputFeilds";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-sky-600">
      <span className="text-4xl text-center text-gray-50 mx-0 my-8 z-1 md:text-3xl my-4">Taskify</span>
      <InputFeilds
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  );
}

export default App;