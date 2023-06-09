import React from 'react';
import './Hero.css';
import CRYPTO from '../../assets/hero-img.png';

const Hero = () => (
  <div id="home" className="hero">
    <div className="container">

      <div className="hero-details">
        <p>Buy & Sell Crypto 24/7</p>
        <h1>Invest In Crypto!!!</h1>
        <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
        <div className="input-container">
          <input type="email" name="email" placeholder="Enter Your Email" />
          <button className="btn" type="button">Learn More</button>
        </div>
      </div>

      <div className="hero-img-container">
        <div className="img-container">
          <img src={CRYPTO} alt="crypto" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
