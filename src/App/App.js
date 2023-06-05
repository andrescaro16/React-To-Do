import { useState } from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../Hooks/useLocalStorage';

// let defaultToDos = [
//   { text: 'Hacer las compras', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Revisar progreso de tareas en la empresa', completed: false },
//   { text: 'Golang Player', completed: true },
// ]


function App() {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("ToDos", []);
  const [searchValue, setSearchValue] = useState('');

  const completedToDos = toDos.reduce((acc, toDo) => {toDo.completed ? acc += 1 : acc += 0; return acc;}, 0);
  const total = toDos.length;
  const filteredToDos = toDos.filter(toDos => toDos.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  return (
    <AppUI
      loading={loading}
      error={error}
      completedToDos={completedToDos}
      total={total}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredToDos={filteredToDos}
      toDos={toDos}
      saveToDos={saveToDos}
    />
  );

}

export default App;
