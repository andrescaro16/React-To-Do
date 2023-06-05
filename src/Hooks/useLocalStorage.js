import { useState } from "react";

function useLocalStorage(itemName, initialValue){
    const localStorageItem = localStorage.getItem(itemName);
    const parsedItem = JSON.parse(localStorageItem) || initialValue;
  
    const [item, setItem] = useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item, saveItem];
}

export { useLocalStorage };