import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todosSlice";

const ListTodo = () => {
  const todosList = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    // dispatch(removeTodo({ id }));
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(removeTodo({ id }));
    }
  };

  const handleEdit = (id) => {
    // munculkan alert untuk edit
    const title = prompt("Edit todo");
    if (title) {
      dispatch(editTodo({ id, title }));
    }
  };

  // const handleCompleted = (id) => {
  //   dispatch(completedTodo({ id }));
  // };

  return (
    <div>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>
            {/* <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleted(todo.id)}
            /> */}
            <span>{todo.title}</span>
            <button onClick={() => handleRemove(todo.id)}>Hapus</button>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
