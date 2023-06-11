import './CreateToDoButton.css';
import { useStateContext } from '../../Context/useStateContext';

function CreateToDoButton() {

    const { setIsOpen } = useStateContext();

    function openModal(){
        setIsOpen(state => !state);
    }

    return(
        <div className='button-container'>
            <button className='create-todo-button' onClick={openModal}>+</button>
        </div>
    );
}

export { CreateToDoButton };