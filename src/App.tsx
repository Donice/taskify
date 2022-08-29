import React from 'react';
import './App.css';

let name: string = 'Donice'
let age: number | string;
let isSstudent: boolean;
let hobbies: string[]; 
let role:[number, string, boolean];//tuple

age = 2

type Person = { //declaring an object in typescript
  name: string,
  age?: number
}

let person: Person = {
  name: 'DOnice',
  // age: 2
}

let lotsOdPeple: Person[]

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
