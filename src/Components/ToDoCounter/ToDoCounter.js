import { useStateContext } from '../../Context/useStateContext';
import './ToDoCounter.css';

function ToDoCounter() {

    const { completedToDos: completed, total } = useStateContext();

    return (
        <>
        {(completed/total) !== 1 ?
            <>
            <h1>Has completado {completed} de {total} To Do's</h1>
            </>
        :
            <>
            <h1>¡Felicidades! Has completado todos tus To Do's</h1>
            </>
        }
        </>
    );
}

export { ToDoCounter };