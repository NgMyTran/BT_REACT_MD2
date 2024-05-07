export default function MapToDo({ toDos, handleDelete, checked }) {
  return (
    <div>
      <ol>
        {toDos?.map((toDo) => (
          <li key={toDo.id}>
            <input type="checkbox" checked={checked} />
            <span>{toDo.toDoName}</span>
            <button type="button" onClick={() => handleDelete(toDo.id)}>
              Delete
            </button>
            {/* <button type="button" onClick={() => handleEdit(todo.id)}>
              Edit
            </button> */}
          </li>
        ))}
      </ol>
    </div>
  );
}
