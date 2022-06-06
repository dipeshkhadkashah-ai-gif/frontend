//importing navlink from router-dom
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Button,
  NavbarToggler,
} from "reactstrap";

const NavBar = () => {
  //creating a function for navbar

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href=('/login');
  };
  const loginData = localStorage.getItem("token");
  console.log(loginData);

  return (
    
      <Navbar color="dark" dark expand="md" className="p-4" style={{fontSize:'20px'}}>
        <NavbarBrand href="/">Site</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/booking">Book Now</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reservation">Reservation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gallery">Gallery </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact </NavLink>
            </NavItem>
          </Nav>
          <Nav mr-auto>
              <NavItem>
                  <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
            {loginData ? (
              <Button style={{ width: "90px" }} onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <NavLink href="/signup">SignUp</NavLink>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    
  );
};

export default NavBar;
