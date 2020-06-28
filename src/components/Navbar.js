import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Covid 19 Sri Lanka</a>
                <ul className="right">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/info">Info</NavLink></li>
                    <li><NavLink to="/stats">Statistics</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
