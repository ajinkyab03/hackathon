import React from 'react';
import './Navbar.css';

const Navbar = ({ setView }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setView('home')}>Home</button></li>
        <li><button onClick={() => setView('about')}>About Us</button></li>
        <li><button onClick={() => setView('contact')}>Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
