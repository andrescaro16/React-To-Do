import { useStateContext } from '../../Context/useStateContext';
import './ToDoSearch.css';


function ToDoSearch() {

    const { searchValue, setSearchValue } = useStateContext();

    return (
        <div className='input-container'>
            <input 
                className='search'
                placeholder="Escribe tu To Do..."
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}/>
        </div>
    );
}

export { ToDoSearch };