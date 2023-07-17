import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './Components/Tasks';

function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to hold the new task input value
  const [newTask, setNewTask] = useState('');
  const [checked, setChecked] = useState('');

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Function to handle removing a task
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1 className='text-center mt-5 pt-5'>Todo List</h1>
      <div className='d-flex justify-content-center align-items-center'>
       
        <input
          type="text"
          className='form-control w-25 mx-3'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask} className='btn btn-info px-3 py-2 '>Add Task</button>
      </div>
      <ul className='my-5'>
        <Tasks tasks={tasks} removeTask={removeTask} />
      </ul>
    </div>
  );
};


export default App
