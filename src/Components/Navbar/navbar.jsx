import { NavLink } from "react-router-dom"; //importing navlink from router-dom
import './navbar.css'; //importing navbar.css
import React, { useState } from 'react';

const Navbar = () => { //creating a function for navbar
    const [navbar,setNavbar] = useState(false);
    const ChangeBg = () => {
        if(window.scrollY >=100) {
            setNavbar(true)
        }else{
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", ChangeBg); 
    return(
        <>
            <nav className={navbar ? "navbar navbar-expand fixed-top active" : "navbar navbar-expand fixed-top"}>
                <NavLink to="/" className="navbar-brand"><span>S</span>ite</NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink className="nav-link" to="/signup">Signup</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
