import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1>
          Demix
          <span className="primary animated-text">007</span>
        </h1>
        <nav className={click ? 'nav-menu active' : 'nav-menu'}>
          <a href="nil">Home</a>
          <a href="nil">About</a>
          <a href="nil">Featured</a>
          <a href="nil">Earn</a>
          <a href="nil">Contact</a>
        </nav>
        <div className="btn-group">
          <button className="btn pop-button" type="button">Connect Wallet</button>
        </div>
        <button className="hamburger" type="button" onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#33' }} />) : (<FaBars size={30} style={{ color: '#33' }} />) }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
