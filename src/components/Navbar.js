import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import logo from "./../logo.svg";

export const NavbarC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img 
            alt=""
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top App-logo"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}