import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/img/logo.png";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="SignUporSignIn">Sign Up or Sign In</Nav.Link>
          <Nav.Link href="GamesListFromDatabase">
            Games List From Database
          </Nav.Link>
          <Nav.Link href="SliderPage">Slider</Nav.Link>
          <Nav.Link href="GuessGamePage">Guess Game</Nav.Link>
          <NavDropdown title="Games" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Game1WikiPage">
              Final Fantasy VII Remake
            </NavDropdown.Item>
            <NavDropdown.Item href="/Game2WikiPage">
              Persona 5 Royal
            </NavDropdown.Item>
            <NavDropdown.Item href="/Game3WikiPage">
              The Last of Us Part 2
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
