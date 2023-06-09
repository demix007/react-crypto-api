import React from 'react';
import {
  FaLinkedin, FaTwitter,
} from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="col footer-logo-container">
        <h1 className="footer-logo">
          Demix
          <span className="primary animated-text">007</span>
        </h1>
      </div>

      <div className="col">
        <h5>Company</h5>
        <span className="bar"> </span>
        <a href="nil">About</a>
        <a href="nil">Privacy</a>
        <a href="nil">Legal</a>
      </div>

      <div className="col">
        <h5>Support</h5>
        <span className="bar"> </span>
        <a href="nil">Help Center</a>
        <a href="nil">Contact Us</a>
        <a href="nil">FAQ</a>
      </div>

      <div className="col">
        <h5>Developers</h5>
        <span className="bar"> </span>
        <a href="nil">Cloud</a>
        <a href="nil">API</a>
        <a href="nil">Commerce</a>
      </div>

      <div className="col">
        <h5>Socials</h5>
        <span className="bar"> </span>
        <a href="nil"><FaTwitter className="icon" aria-label="Twitter" /></a>
        <a href="nil"><FaLinkedin className="icon" aria-label="Linkedin" /></a>
        <a href="nil"><BsGithub className="icon" aria-label="Github" /></a>
      </div>
    </div>
  </div>
);

export default Footer;
