import React from "react"
import planet from "../assets/planet.png"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav>
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={planet} alt=""></img>
        <h1>Space Travelers' Hub</h1>
      </div>
      <ul className="links">
        <li><NavLink to='/'>Rockets</NavLink></li>
        <li><NavLink to='/missions'>Missions</NavLink></li>
        <li><NavLink to='/profile'>My Profile</NavLink></li>
      </ul>
    </div>
    </nav>
  )
}

export default Header;