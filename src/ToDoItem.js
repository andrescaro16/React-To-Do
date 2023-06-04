import React from "react";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";


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
        <li className="toDoItem">
            <CompleteIcon completed={completed} onComplete={onCheckboxChange} />
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
            <DeleteIcon onDelete={onDeleteButton} />
        </li>
    );
}

export { ToDoItem };