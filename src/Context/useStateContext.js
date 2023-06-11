import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const Context = createContext();

export const StateContext = ({ children }) => {

    // useLocalStorage
    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error,
    } = useLocalStorage("ToDos", []);
    const [searchValue, setSearchValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    // SubComponents
    const completedToDos = toDos.reduce((acc, toDo) => {toDo.completed ? acc += 1 : acc += 0; return acc;}, 0);
    const total = toDos.length;
    const filteredToDos = toDos.filter(toDos => toDos.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

    // Functions
    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
            text,
            completed: false,
        });
        saveToDos(newToDos);
    }

    return (
        <Context.Provider value={{
            loading,
            error,
            completedToDos,
            total,
            searchValue,
            setSearchValue,
            filteredToDos,
            toDos,
            addToDo,
            saveToDos,
            isOpen,
            setIsOpen,
        }}>
            {children}
        </Context.Provider>
    );

}

export const useStateContext = () => useContext(Context);