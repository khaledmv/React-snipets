import React from 'react';
import { NavLink } from 'react-router';
import './navbar.style.css';

function Navbar() {
  return (
    <div className='header'>
        <nav className="header-navigation">
            <div className="logo">Logo</div>
             <div className="navigation">
             <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li> <NavLink to="/about">About</NavLink></li>
                <li> <NavLink to="/sign-in">Sign-In</NavLink></li>
             </ul>
             </div>
        </nav>
    </div>
  )
}

export default Navbar