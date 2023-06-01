import { useState } from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

let toDosInitial = [
  { text: 'Hacer las compras', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Revisar progreso de tareas en la empresa', completed: false },
  { text: 'Golang Player', completed: true },
]

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [toDos, setToDos] = useState(toDosInitial);

  const completedToDos = toDos.reduce((acc, toDo) => {toDo.completed ? acc += 1 : acc += 0; return acc;}, 0);
  const total = toDos.length;
  const filteredToDos = toDos.filter(toDos => toDos.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  return (
    <>
      <ToDoCounter completed={completedToDos} total={total} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <ToDoList>
        {filteredToDos.map((toDo, index) => (
          <ToDoItem key={index} text={toDo.text} completed={toDo.completed} i={index} toDos={toDos} setToDos={setToDos} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
