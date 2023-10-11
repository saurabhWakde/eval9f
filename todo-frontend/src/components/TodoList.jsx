import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  useEffect(() => {
    axios
      .get(`https://silly-waders-foal.cyclic.app/todos?status=${statusFilter}&tag=${tagFilter}`, { headers: { 'token': localStorage.getItem('token') } })
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [statusFilter, tagFilter]);

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <label>Status Filter:</label>
        <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div>
        <label>Tag Filter:</label>
        <select onChange={(e) => setTagFilter(e.target.value)} value={tagFilter}>
          <option value="">All</option>
          <option value="personal">Personal</option>
          <option value="official">Official</option>
          <option value="family">Family</option>
        </select>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span>{todo.taskname}</span>
            <span>{todo.status}</span>
            <span>{todo.tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
