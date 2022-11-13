import React from "react";
import "../styles/ActionStatus.css";
// import ListTodo from "./ListTodo";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo } from "../features/todosSlice";

const ActionStatus = () => {
  const todo = useSelector((state) => state.todos.todos);
  // const filterStatus = useSelector((state) => state.todos.filterStatus);

  // const sortTodoList = [...todo];
  // sortTodoList.sort((a, b) => a - b);

  const dispatch = useDispatch();

  // const filteredTodoList = sortTodoList.filter((item) => {
  //   if (filterStatus === "all") {
  //     return true;
  //   }
  //   return item.status === filterStatus;
  // });

  const handleAll = () => {
    dispatch(filterTodo("all"));
  };

  const handleUncompleted = () => {
    dispatch(filterTodo("uncompleted"));
  };

  const handleCompleted = () => {
    dispatch(filterTodo("completed"));
  };

  return (
    <div className="action-btn">
      <button className="btn" onClick={handleAll}>
        All
      </button>
      <button className="btn" onClick={handleUncompleted}>
        Active
      </button>
      <button className="btn" onClick={handleCompleted}>
        Completed
      </button>
    </div>
  );
};

export default ActionStatus;
