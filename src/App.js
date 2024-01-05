import './App.css';
import React, { useState } from 'react';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';
import './App.css';

function App() {
  const [openTasks, setOpenTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addToDo = (text) => {
    setOpenTasks([...openTasks, { text, completed: false }]);
  };

  const toggleComplete = (index, isCompleted) => {
    if (isCompleted) {
      const taskToToggle = completedTasks[index];
      setCompletedTasks(completedTasks.filter((_, i) => i !== index));
      setOpenTasks([...openTasks, { ...taskToToggle, completed: !taskToToggle.completed }]);
    } else {
      const taskToToggle = openTasks[index];
      setOpenTasks(openTasks.filter((_, i) => i !== index));
      setCompletedTasks([...completedTasks, { ...taskToToggle, completed: !taskToToggle.completed }]);
    }
  };

  return (
    <div className="App">
      <h1>To-Do Application</h1>
      <AddToDo addToDo={addToDo} />
      {openTasks.length > 0 && (
        <div>
          <h2>Open Tasks</h2>
          <ToDoList tasks={openTasks} toggleComplete={(index) => toggleComplete(index, false)} />
        </div>
      )}
      {completedTasks.length > 0 && (
        <div>
          <h2>Completed Tasks</h2>
          <ToDoList tasks={completedTasks} toggleComplete={(index) => toggleComplete(index, true)} />
        </div>
      )}
    </div>
  );
}

export default App;