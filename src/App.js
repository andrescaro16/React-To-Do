import { useState } from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

// let defaultToDos = [
//   { text: 'Hacer las compras', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Revisar progreso de tareas en la empresa', completed: false },
//   { text: 'Golang Player', completed: true },
// ]

function App() {
  
  //LocalStorage
  const localStorageToDos = localStorage.getItem('ToDos');
  //const parsedToDos = JSON.parse(localStorageToDos) || []; //Si no hay nada en el localStorage, parsedToDos es un array vacío. Esta lógica la pasamos al useState de ToDos para eficiencia (para que no se ejecute en cada re-renderización, solo en el primer render)
  const saveToDos = (newToDos) => {
    localStorage.setItem('ToDos', JSON.stringify(newToDos));
    setToDos(newToDos);
  }

  const [searchValue, setSearchValue] = useState('');
  const [toDos, setToDos] = useState(() => {
    return localStorageToDos ? JSON.parse(localStorageToDos) : [];
  });

  const completedToDos = toDos.reduce((acc, toDo) => {toDo.completed ? acc += 1 : acc += 0; return acc;}, 0);
  const total = toDos.length;
  const filteredToDos = toDos.filter(toDos => toDos.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  return (
    <>
      <ToDoCounter completed={completedToDos} total={total} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <ToDoList>
        {filteredToDos.map((toDo, index) => (
          <ToDoItem key={index} text={toDo.text} completed={toDo.completed} i={index} toDos={toDos} saveToDos={saveToDos} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
