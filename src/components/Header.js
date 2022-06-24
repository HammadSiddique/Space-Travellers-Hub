import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Header = () => (
  <nav>
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={planet} alt="" />
        <h1>Space Travelers Hub</h1>
      </div>
      <ul className="links">
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/profile">My Profile</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Header;
