import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    let parsedItem;
    useEffect(() => {
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName);
                parsedItem = JSON.parse(localStorageItem) || initialValue;
                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        },2000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };


// let defaultToDos = [
//   { text: 'Hacer las compras', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Revisar progreso de tareas en la empresa', completed: false },
//   { text: 'Golang Player', completed: true },
// ]