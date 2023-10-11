// Signup.js
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios
      .post('https://silly-waders-foal.cyclic.app/signup', { email, password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/login'; // Redirect to /todos
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
