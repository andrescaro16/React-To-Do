import React from "react";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";


function ToDoItem({text, completed, i, toDos, saveToDos}) {

    const onDeleteButton = () => {
        saveToDos(toDos.filter((toDo, index) => index !== i));
    }

    const onCheckboxChange = () => {
        saveToDos(
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