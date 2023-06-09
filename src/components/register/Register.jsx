import React from 'react';
import TRADE from '../../assets/trade.png';
import './Register.css';

const Register = () => (
  <div className="register">
    <div className="container">
      <div className="left">
        <img src={TRADE} alt="" />
      </div>

      <div className="right">
        <h2>Earn Passive Income With Crypto</h2>
        <p>
          Earn up to 12% annual rewards on 40+ digital assets.
          Simply hold your assets in the app to automatically earn
          rewards at the end of each month with no lockups and no limits.
        </p>

        <div className="input-container">
          <input type="email" placeholder="Enter Your Email" />
          <button className="btn" type="button">Learn More</button>
        </div>
      </div>
    </div>
  </div>
);

export default Register;
