import React, {useState} from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  return (
    <div className="header">
        <div className="container">
            <h1>Demix<span className="primary">007</span></h1>
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
            <button className="btn">Connect Wallet</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar