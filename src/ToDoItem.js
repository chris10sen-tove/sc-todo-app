import React from 'react';
import PropTypes from 'prop-types';

function ToDoItem({ index, task, toggleComplete }) {
  return (
    <li label="Task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(index)}
        aria-label={`Mark task ${task.text} as complete`}
      />
      {task.text}
    </li>
  );
}

ToDoItem.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  toggleComplete: PropTypes.func.isRequired,
};

export default ToDoItem;