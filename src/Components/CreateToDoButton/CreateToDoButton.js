import './CreateToDoButton.css';

function CreateToDoButton() {
    return(
        <div className='button-container'>
            <button className='create-todo-button' onClick={()=>console.log("Click create ToDo")}>Crear To Do</button>
        </div>
    );
}

export { CreateToDoButton };