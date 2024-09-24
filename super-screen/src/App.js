import React from "react";
import NoteTakingApp from "./Components/NoteTakingApp";
import ClockWithTimer from "./Components/ClockWithTimer";
import TodoList from "./Components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="component note-app">
        <NoteTakingApp />
      </div>
      <div className="right-side">
        <div className="component clock-timer">
          <ClockWithTimer />
        </div>
        <div className="component todo-list">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
