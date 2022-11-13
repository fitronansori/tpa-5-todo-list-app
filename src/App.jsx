import React from "react";
import "./styles/App.css";
import ActionStatus from "./components/ActionStatus";
import InputTodos from "./components/InputTodos";
import ListTodo from "./components/ListTodo";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="top">
          <h1>What's the plan for today?</h1>
          <InputTodos />
        </div>
        <div className="bottom">
          <div>
            <ActionStatus />
          </div>
          <ListTodo />
        </div>
      </div>
    </>
  );
};

export default App;
