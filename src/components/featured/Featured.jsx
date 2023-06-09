import React, { useState, useEffect} from 'react';
import './Featured.css';
import BTC from '../../assets/btc-img.png';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';

const Featured = () => {

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dodgecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        <div className="right">
          <div className="top">
            <img src={BTC} alt="" />
          </div>
          <div>
            <h5>Bitcoin</h5>
            <p>$58,000</p>
          </div>
          <span><FiArrowUpRight />5.8%</span>
        </div>
      </div>
    </div>
  );
};

export default Featured;