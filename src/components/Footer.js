import React from 'react';
// import Container from 'react-bootstrap/Container';
import '../App.css';
import PalmMart from '../assets/palm-tree-logo.png';

function Footer() {
  return (
    <footer className="footer brand-name">
      <div className="footer-brand">
        <img src={PalmMart} alt="logo" width={40} height={40} />
        <span> PalmMart</span>
      </div>
      <div>
        <span>Powered By</span>
        <a href="https://coreui.io"> PalmMart Creatives</a>
      </div>
    </footer>
  );
}

export default Footer;
