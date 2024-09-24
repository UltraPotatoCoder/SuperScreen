import "./App.css";
import NoteTakingApp from "./Components/NoteTakingApp";
import ClockWithTimer from "./Components/ClockWithTimer";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="app-container">
      <div className="note-section">
        <NoteTakingApp />
      </div>
      <div className="right-section">
        <div className="clock-section">
          <ClockWithTimer />
        </div>
        <div className="todo-section">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
