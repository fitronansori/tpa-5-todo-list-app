import React, { useState } from "react";
import "../styles/ListTodo.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo, completedTodo } from "../features/todosSlice";

const ListTodo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(removeTodo({ id }));
    }
  };

  const handleEdit = (id) => {
    const title = prompt("Edit todo");
    if (title) {
      dispatch(editTodo({ id, title }));
    }
  };

  const handleCompleted = (id) => {
    dispatch(completedTodo({ id }));
  };

  return (
    <div className="todo-container">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="todo">
              <div className="todo-left">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCompleted(todo.id)}
                />
                <p
                  className={todo.completed ? "completed" : ""}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </p>
              </div>
              <div className="todo-right">
                <MdEdit className="icon" onClick={() => handleEdit(todo.id)} />

                <MdDelete
                  className="icon"
                  onClick={() => handleRemove(todo.id)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    // error todos.map is not a function in ListTodo.jsx line 32, why?
  );
};

export default ListTodo;
