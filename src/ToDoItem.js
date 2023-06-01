function ToDoItem({text, completed, i, toDos, setToDos}) {

    const onDeleteButton = () => {
        setToDos(toDos.filter((toDo, index) => index !== i));
    }

    const onCheckboxChange = () => {
        setToDos(
            toDos.map((toDo, index) => {
                if (index === i) {
                    return {...toDo, completed: !completed};
                }
                return toDo;
            })
        );
    }

    return (
        <li>
            <input className="Checkbox-input" type="Checkbox" checked={completed} onChange={onCheckboxChange}/>
            <p className={`ToDo-text ${completed && "icon-check-active"}`}>{text}</p>
            <button className="Delete-button" onClick={onDeleteButton}>X</button>
        </li>
    );
}

export { ToDoItem };