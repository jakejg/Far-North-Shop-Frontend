import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Nav">
            <NavLink className="Nav-Link" to='/products'>Products</NavLink>
            <NavLink className="Nav-Link" to='/cart'>Cart</NavLink>
        </nav>
    );
}

export default Navbar
