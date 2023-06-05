import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    let parsedItem;
    useEffect(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            parsedItem = JSON.parse(localStorageItem) || initialValue;
            setItem(parsedItem);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
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