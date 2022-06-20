import React from "react"
import planet from "../assets/planet.png"

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={planet} alt=""></img>
        <h1>Space Travelers' Hub</h1>
      </div>
      <ul className="links">
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </div>
  )
}

export default Header;