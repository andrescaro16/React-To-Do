import React from "react";
import { useStateContext } from "../../Context/useStateContext";
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";


function ToDoItem({ text, completed, i }) {

    const { toDos, saveToDos } = useStateContext();

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