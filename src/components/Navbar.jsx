import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/authentication">Authentication</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
