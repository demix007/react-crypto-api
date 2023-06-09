import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import './Featured.css';

const Featured = () => {
  const [coin, setCoin] = useState(null);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);


  if (!coin) return null;

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        <div className="right">
          <div className="card">
            <div className="top">
              <img src={coin[0].image} alt="" />
            </div>
            <div>
              <h5>{coin[0].name}</h5>
              <p>
                $
                {coin[0].current_price.toLocaleString()}
              </p>
            </div>

            {coin[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {coin[0].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {coin[0].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={coin[1].image} alt="" />
            </div>
            <div>
              <h5>{coin[1].name}</h5>
              <p>
                $
                {coin[1].current_price.toLocaleString()}
              </p>
            </div>

            {coin[1].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {coin[1].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {coin[1].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={coin[2].image} alt="" />
            </div>
            <div>
              <h5>{coin[2].name}</h5>
              <p>
                $
                {coin[2].current_price.toLocaleString()}
              </p>
            </div>

            {coin[2].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {coin[2].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {coin[2].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={coin[3].image} alt="" />
            </div>
            <div>
              <h5>{coin[3].name}</h5>
              <p>
                $
                {coin[3].current_price.toLocaleString()}
              </p>
            </div>

            {coin[3].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {coin[3].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {coin[3].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={coin[4].image} alt="" />
            </div>
            <div>
              <h5>{coin[4].name}</h5>
              <p>
                $
                {coin[4].current_price.toLocaleString()}
              </p>
            </div>

            {coin[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {coin[4].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {coin[4].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={coin[5].image} alt="" />
            </div>
            <div>
              <h5>{coin[5].name}</h5>
              <p>
                $
                {coin[5].current_price.toLocaleString()}
              </p>
            </div>

            {coin[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {coin[5].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {coin[5].price_change_percentage_24h.toFixed(2)}
                %
              </span>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Featured;
