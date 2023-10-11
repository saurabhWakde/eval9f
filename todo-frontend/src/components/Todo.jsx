import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  useEffect(() => {
    // Fetch todos from your API based on statusFilter and tagFilter
    axios.get(`https://silly-waders-foal.cyclic.app/todos?status=${statusFilter}&tag=${tagFilter}`)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [statusFilter, tagFilter]);

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleTagChange = (event) => {
    setTagFilter(event.target.value);
  };

  return (
    <div>
      <h1>Todos</h1>
      <div>
        <label>Status:</label>
        <select onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div>
        <label>Tag:</label>
        <select onChange={handleTagChange}>
          <option value="">All</option>
          <option value="personal">Personal</option>
          <option value="official">Official</option>
          <option value="family">Family</option>
        </select>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.taskname} - {todo.status} - {todo.tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
