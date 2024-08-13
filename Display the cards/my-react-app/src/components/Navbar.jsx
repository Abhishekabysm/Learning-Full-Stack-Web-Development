import React, { useState } from 'react';
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='main'>
      <nav className="Navbar">
        <div className="logo">Abhishek Kumar</div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-links-mobile ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
