import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Featured.css';
import BTC from '../../assets/btc-img.png';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';

const Featured = () => {
  const [data, setData] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en"
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  console.log(data)
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