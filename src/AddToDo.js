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
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your task here"
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default AddToDo;