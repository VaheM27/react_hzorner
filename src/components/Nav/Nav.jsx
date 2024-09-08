import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Nav.scss"

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
      </div>

    </nav>
  )
}

export default Nav
