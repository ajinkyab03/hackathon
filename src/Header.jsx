import React from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Museum Visitor Website</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
