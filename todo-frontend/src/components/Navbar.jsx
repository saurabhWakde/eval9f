import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/Signup'>Signup</Link>
      <Link to='/todos'>Todos</Link>
      <Link to='createtodo'>CreateTodo</Link>
    </div>
  )
}

export default Navbar
