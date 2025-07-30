// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <span className="powered-by">
        <small>POWERED BY </small>
        <a href="https://www.visualab.uk/" target="_blank" rel="noopener noreferrer">
          <img src="/Visualab.png" alt="Visualab" className="logovisualab" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
