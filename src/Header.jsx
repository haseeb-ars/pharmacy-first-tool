import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <img src="/Pharmacistfirst.png" alt="Pharmacist First" className="logo careplus" />
        <span className="powered-by">
          <small>POWERED BY VISUALAB</small>
          
        </span>
      </div>
      <div className="header-right">
        <img src="/nhs.svg" alt="Supporting the NHS" className="logo nhs" />
      </div>
    </header>
  );
};

export default Header;
