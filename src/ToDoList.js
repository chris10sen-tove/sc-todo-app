import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, toggleComplete }) {
    return (
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem key={index} index={index} task={task} toggleComplete={toggleComplete} />
        ))}
      </ul>
    );
}

export default ToDoList;