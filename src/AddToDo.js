import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddToDo({ addToDo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addToDo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a new task:
      </label>
        <input
          aria-label="Type the task you want to add"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your task here"
        />
      <button type="submit">Add</button>
    </form>
  );
}

AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default AddToDo;