import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import PalmMart from '../assets/palm-tree-logo.png';
import Cart from '../assets/carts.png';

function MyNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <img src={PalmMart} alt="logo" width={40} height={40} />
        <Navbar.Brand href="#home" id="brand-name">PalmMart</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Mens Clothing</Nav.Link>
          <Nav.Link href="#home">Accessories</Nav.Link>
          <Nav.Link href="#features">Gadgets</Nav.Link>
        </Nav>
        <img src={Cart} alt="cart" width={25} height={30} />
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
