function ToDoItem({text, completed}) {
    return (
        <li>
            <input className="Checkbox-input" type="Checkbox" />
            <p className={`ToDo-text ${completed && "icon-check-active"}`}>{text}</p>
            <button className="Delete-button">X</button>
        </li>
    );
}

export { ToDoItem };