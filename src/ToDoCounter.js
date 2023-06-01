import './ToDoCounter.css';

function ToDoCounter({completed, total}) {
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