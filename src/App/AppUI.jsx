import { ToDoCounter } from "../Components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../Components/ToDoSearch/ToDoSearch";
import { ToDoList } from "../Components/ToDoList/ToDoList";
import { ToDoItem } from "../Components/ToDoList/ToDoItem";
import { CreateToDoButton } from "../Components/CreateToDoButton/CreateToDoButton";
import { ToDoLoading } from "../Components/ToDoLoading/ToDoLoading";
import { ToDoError } from "../Components/ToDoLoading/ToDoError";
import { EmptyToDos } from "../Components/ToDoLoading/EmptyToDos";
import { Modal } from "../Components/Modal/Modal";
import { useStateContext } from "../Context/useStateContext";

function AppUI() {
	const { loading, error, filteredToDos, isOpen } = useStateContext();

	return (
		<>
			<ToDoCounter />
			<ToDoSearch />

			<ToDoList>
				{loading ? (
					<>
						<ToDoLoading />
						<ToDoLoading />
						<ToDoLoading />
						<ToDoLoading />
					</>
				) : null}
				{error ? <ToDoError /> : null}
				{!loading && filteredToDos.length === 0 ? <EmptyToDos /> : null}
				{filteredToDos.map((toDo, index) => (
					<ToDoItem
						key={index}
						text={toDo.text}
						completed={toDo.completed}
						i={index}
					/>
				))}
			</ToDoList>

			<CreateToDoButton />
      {isOpen && (
        <Modal>
          <h1>Este es el modal</h1>
        </Modal>
      )}
		</>
	);
}

export { AppUI };
