import { useState } from "react";
import "./App.css";
import Tasks from "./Components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //adding a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  //removing a task
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 pt-5 ">Todo List</h1>
      <div className="d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="form-control mx-3"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ maxWidth: "270px" }}
        />
        <div className="d-block">
          <button onClick={addTask} className="btn btn-info px-3 py-2 ">
            Add Task
          </button>
        </div>
      </div>
      <ul className="my-5">
        <Tasks
          tasks={tasks}
          removeTask={removeTask}
          toggleTaskComplete={toggleTaskComplete}
        />
      </ul>
    </div>
  );
}

export default App;
