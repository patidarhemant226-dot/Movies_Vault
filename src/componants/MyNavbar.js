import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MyNavbar.css';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{fontSize:"42px", color:"red"}}>Nelflix</Navbar.Brand>
        <button type='button' style={{fontSize:"22px" , backgroundColor:"red", color:"white"}}>Sign In</button>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;