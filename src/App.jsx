import React from "react";
// import ActionStatus from "./components/ActionStatus";
import InputTodos from "./components/InputTodos";
import ListTodo from "./components/ListTodo";

const App = () => {
  return (
    <>
      <div>
        <h1>What's plan for today?</h1>
        <InputTodos />
      </div>
      {/* <div>
        <ActionStatus />
      </div> */}
      <ListTodo />
    </>
  );
};

export default App;
