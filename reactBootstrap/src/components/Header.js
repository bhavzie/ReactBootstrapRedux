import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
          <Navbar bg="dark" variant="dark" className = "mb-5">
            <Navbar.Brand href="/">TodoList</Navbar.Brand>
            <Nav className="mr-auto ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar>
        );
    }
}
