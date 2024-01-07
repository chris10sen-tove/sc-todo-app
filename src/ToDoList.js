import React, { useCallback, useRef } from 'react';
// import ToDoItem from './ToDoItem';

function ToDoList({ tasks, toggleComplete }) {
  const checkboxRefs = useRef(tasks.map(() => React.createRef()));

  const handleKeyPress = useCallback((event, index) => {
    if (event.key === ' ' || event.key === 'Enter') {
      toggleComplete(index);
      checkboxRefs.current[index]?.current?.focus();
      event.preventDefault(); // Prevents default behaviour of space bar
    }
  }, [toggleComplete]);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            ref={checkboxRefs.current[index]}
            checked={task.completed}
            onChange={() => toggleComplete(index)}
            onKeyDown={(event) => handleKeyPress(event, index)}
            aria-checked={task.completed ? 'true' : 'false'}
            tabIndex={0}
          />
          <span>{task.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;