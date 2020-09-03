import React from 'react'
import { NavLink } from 'react-router-dom';
 
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
        >
        Home
          </NavLink>
        <NavLink
          to="/about"
        >
        About Me
          </NavLink>
        <NavLink
          to="/login"
        >
        Sign Up
          </NavLink>
          <NavLink 
            to="/tasklist"
        >
        Task
        </NavLink>
        <NavLink 
            to="/newtaskform"
        >
        Enter Task
        </NavLink>
 
      </div>
    )
  }
}
 
export default Navbar;