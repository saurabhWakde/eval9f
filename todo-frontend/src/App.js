import React from 'react';
import { Route,Routes  } from 'react-router-dom';
import Home from './components/Home';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/signup"  element={<Signup/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/todos" element={<TodoList/>} />
        <Route path="/createtodo"  element={<TodoForm/>} />
    </Routes>
    </>
    
  );
}

export default App;
