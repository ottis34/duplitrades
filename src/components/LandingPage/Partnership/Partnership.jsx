import React from "react";
import "./Partnership.css";
import visa from "../../../assets/landingPage/visa.png";
import binance from "../../../assets/landingPage/binance.png";
import verve from "../../../assets/landingPage/verve.png";
import coinbase from "../../../assets/landingPage/coinbase.png";
import mastercard from "../../../assets/landingPage/mastercard.png";

const Partnership = () => {
  return (
    <div className="ps__container">
      <div className="ps__content">
        <div className="ps__head">
          <h2>Companies in partnership with Duplitrades</h2>
          <p>A few trusted brands we work with.</p>
        </div>

        <div className="ps__body">
          <img src={binance} className="grayscale" alt="" />
          <img src={coinbase} className="grayscale" alt="" />
          <img src={mastercard} className="grayscale" alt="" />
          <img src={visa} className="grayscale" alt="" />
          <img src={verve} className="grayscale" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
