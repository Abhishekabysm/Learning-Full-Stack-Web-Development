import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar.css'
function Navbar() {
  return (
    <div>
      <nav>
        <li><NavLink className = {(e)=>{return e.isActive? "red": ""}} navbar to="/">Home</NavLink></li>
        <li><NavLink className = {(e)=>{return e.isActive? "red": ""}} to="/about">About</NavLink></li>
        <li><NavLink className = {(e)=>{return e.isActive? "red": ""}} to="/login">Login</NavLink></li>
        <li><NavLink className = {(e)=>{return e.isActive? "red": ""}} to="/contact">Contact</NavLink></li>
      </nav>
    </div>
  )
}

export default Navbar
