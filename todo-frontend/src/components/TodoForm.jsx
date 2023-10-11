import React, { useState } from 'react';
import axios from 'axios';

function TodoForm() {
  const [taskname, setTaskname] = useState('');
  const [status, setStatus] = useState('pending');
  const [tag, setTag] = useState('personal');

  const handleCreateTodo = () => {
    axios
      .post('https://silly-waders-foal.cyclic.app/todos', { taskname, status, tag }, { headers: { 'token': localStorage.getItem('token') } })
      .then((response) => {
        console.log('Todo created:', response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <input
        type="text"
        placeholder="Taskname"
        value={taskname}
        onChange={(e) => setTaskname(e.target.value)}
      />
      <select onChange={(e) => setStatus(e.target.value)} value={status}>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
      <select onChange={(e) => setTag(e.target.value)} value={tag}>
        <option value="personal">Personal</option>
        <option value="official">Official</option>
        <option value="family">Family</option>
      </select>
      <button onClick={handleCreateTodo}>Create</button>
    </div>
  );
}

export default TodoForm;
