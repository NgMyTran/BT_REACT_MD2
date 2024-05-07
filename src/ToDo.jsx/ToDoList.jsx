import React from "react";

export default function ToDoList({ addWorkToDo }) {
  return (
    <div>
      <form onSubmit={addWorkToDo}>
        <input type="text" placeholder="Input work that you have to do" />
        <button type="submit">Add Todo</button>
        <ul>
          <li></li>
        </ul>
      </form>
    </div>
  );
}
