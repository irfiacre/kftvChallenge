import React from 'react';
import '../styles/header.css';
import {NavLink} from 'react-router-dom';

const Header =()=>(
    <header className= 'navBar'>
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo"> KFTV MOVIES </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/dashboard" activeClassName="isActive" className='navLink'>Dashboard</NavLink></li>
                <li><NavLink to="/movie" activeClassName="isActive" className='navLink'>Add a movie</NavLink></li>
                <li><NavLink to="/create" activeClassName="isActive" className='navLink'>Create an Admin</NavLink></li>
                <li><NavLink to="/" className='navLink'>Logout</NavLink></li>
            </ul>
            </div>
         </nav>
        
    </header>
); 

export default Header;
