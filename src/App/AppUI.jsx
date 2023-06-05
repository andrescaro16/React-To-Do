import { ToDoCounter } from '../Components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from '../Components/ToDoSearch/ToDoSearch';
import { ToDoList } from '../Components/ToDoList/ToDoList';
import { ToDoItem } from '../Components/ToDoList/ToDoItem';
import { CreateToDoButton } from '../Components/CreateToDoButton/CreateToDoButton';

function AppUI({
    completedToDos,
    total,
    searchValue,
    setSearchValue,
    filteredToDos,
    toDos,
    saveToDos,
}){
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

export { AppUI };