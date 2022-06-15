import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          />{" "}
          React Bootstrap
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <Link className="btn btn-secondary" to="/">
              App
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="btn btn-secondary" to="/reduxApp">
              reduxApp
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
