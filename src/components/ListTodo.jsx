import React, { useState } from "react";
import "../styles/ListTodo.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo, completedTodo } from "../features/todosSlice";

const ListTodo = () => {
  const [status, setStatus] = useState(false);
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

  const handleCompleted = (id) => {
    dispatch(completedTodo({ id }));
    setStatus(!status);
  };

  return (
    <div className="todo-container">
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>
            <div className="top-list">
              <div className="todo-info">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCompleted(todo.id)}
                />
                <p>{todo.title}</p>
              </div>
              <div className="todo-button">
                <button
                  onClick={() => handleRemove(todo.id)}
                  className="btn btn-delete"
                >
                  <MdDelete />
                </button>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="btn btn-edit"
                >
                  <MdEdit />
                </button>
              </div>
            </div>
            <div className="bottom-list">
              <p className="status-todo">
                Status :
                <span>
                  {todo.completed ? (
                    <span> Completed</span>
                  ) : (
                    <span> Active</span>
                  )}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
