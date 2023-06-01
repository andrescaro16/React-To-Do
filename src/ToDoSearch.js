import './ToDoSearch.css';

function ToDoSearch({ searchValue, setSearchValue }) {

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