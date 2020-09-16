import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Navbar

  } from 'reactstrap';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="NavBar" color="light" light expand="sm">
            <NavbarBrand href="/">Far North Wood Works</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse className='NavBar-collapse' isOpen={isOpen} navbar>
                <Nav navbar>
                <NavItem className='NavBar-item'>
                        <NavLink className="NavBar-link" to='#'>About</NavLink>
                    </NavItem>
                    <NavItem className='NavBar-item'>
                        <NavLink className="NavBar-link" to='/products'>Products</NavLink>
                    </NavItem>
                    <NavItem className='NavBar-item'>
                        <NavLink className="NavBar-link" to='/cart'>Cart</NavLink>
                    </NavItem> 
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavBar
