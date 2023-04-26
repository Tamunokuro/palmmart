import React from 'react';
import Container from 'react-bootstrap/Container';
import '../App.css';
import PalmMart from '../assets/palm-tree-logo.png';

function Footer() {
  return (
    <Container>
      <Footer className="footer">
        <div className="footer-brand">
          <img src={PalmMart} alt="logo" width={40} height={40} />
          <span>2022</span>
        </div>
        <div>
          <span>Powered By</span>
          <a href="https://coreui.io"> PalmMart Creatives</a>
        </div>
      </Footer>
    </Container>
  );
}

export default Footer;
