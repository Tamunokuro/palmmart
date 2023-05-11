import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import PalmMart from '../assets/palm-tree-logo.png';
import Cart from '../assets/carts.png';

function MyNavbar() {
  const itemCount = useSelector((state) => state.cart.itemCount);
  return (
    <Navbar className="brand-name" bg="light" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <img src={PalmMart} alt="logo" width={40} height={40} />
        <Navbar.Brand href="/">PalmMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Items</Nav.Link>
            <Nav.Link href="#home">Explore</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/mycart">
              <img src={Cart} alt="cart" width={25} height={30} />
              <div className="translate-middle badge rounded-pill bg-danger">
                <span id="item__counter">
                  {itemCount}
                </span>
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
