import React from "react";
import "./ToDoForm.css";
import { useStateContext } from "../../Context/useStateContext";

function ToDoForm(){

	const { addToDo, setIsOpen } = useStateContext();

	function onSubmit(event){
		event.preventDefault();
		addToDo(event.target[0].value);
		setIsOpen(false);
	}

	function onCancel(){
		setIsOpen(false);
	}

	return(
		<form className="modal-form" onSubmit={onSubmit} >
			<label className="modal-form-label">Escribe tu ToDo</label>
			<textarea className="modal-form-textarea" placeholder="Agradecer por el presente..." />
			<div className="modal-form-buttonContainer">
				<button type="button" className="modal-form-button modal-form-button--cancel" onClick={onCancel}>
					Cancelar
				</button>
				<button type="submit" className="modal-form-button modal-form-button--add">
					Añadir
				</button>
			</div>
		</form>
	);
}

export { ToDoForm };