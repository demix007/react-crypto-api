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
          <span className="primary">007</span>
        </h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn" type="button">Connect Wallet</button>
        </div>
        <button className="hamburger" type="button" onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#33' }} />) : (<FaBars size={30} style={{ color: '#33' }} />) }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
