import React, { useState } from "react";
import "../styles/InputTodos.css";
import { SiAddthis } from "react-icons/si";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todosSlice";

const InputTodos = () => {
  const [todos, setTodos] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        title: todos,
        completed: false,
      })
    );
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-todo"
        placeholder="What to do?"
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
      />
      <button className="add-btn" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default InputTodos;
