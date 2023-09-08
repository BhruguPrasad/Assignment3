import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask != "") {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (num) => {
    const hello = tasks.filter((hii,i) => i != num);
    setTasks(hello);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask} className='add_btn'>Add</button>
      </div>

      {tasks.length == 0 ? (
        <h2>No tasks added yet!</h2>
      ) : (
        <div>
          {tasks.map((task, index) => (
            <div key={index}>
              {task}
              <button className="remove_btn" onClick={() => deleteTask(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default App;
