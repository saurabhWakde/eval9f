import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';
function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [taskname, setTaskname] = useState('');
  const [status, setStatus] = useState('');
  const [tag, setTag] = useState('');

  const handleSignup = () => {
    axios
      .post('https://silly-waders-foal.cyclic.app/login', { email, password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/todos'; // Redirect to /todos
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = () => {
    axios
      .post('https://silly-waders-foal.cyclic.app/login', { email, password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/todos'; // Redirect to /todos
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createTodo = () => {
    const token = localStorage.getItem('token');
    axios
      .post(
        'https://silly-waders-foal.cyclic.app/todos',
        { taskname, status, tag },
        {
          headers: {
            'token': token,
          },
        }
      )
      .then((response) => {
        console.log('Todo created:', response.data);
        setTaskname('');
        setStatus('');
        setTag('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Welcome to the Todo App</h1>
      <div>
       <Link to="/signup"> <h2>Signup</h2></Link>
        {/* ... */}
      </div>
      <div>
       <Link to='/login'> <h2>Login</h2></Link>
        {/* ... */}
      </div>
       <Link to='/createtodo'> <h2>Create TODO</h2></Link>

    </div>
  );
}

export default Home;
