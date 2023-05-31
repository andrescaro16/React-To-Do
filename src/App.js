import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import './App.css';

let toDos = [
  { text: 'Hacer las compras', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Revisar progreso de tareas en la empresa', completed: false },
  { text: 'Golang Player', completed: true }
]

function App() {
  return (
    <React.Fragment>

      <ToDoCounter completed={3} total={5} />
      <ToDoSearch />

      <ToDoList>
        {toDos.map((toDo, index) => (
          <ToDoItem key={index} text={toDo.text} completed={toDo.completed} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
