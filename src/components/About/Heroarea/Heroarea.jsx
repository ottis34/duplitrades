import React from "react";
import "./Heroarea.css";
import about from "../../../assets/about/about.jpg";
import about1 from "../../../assets/about/about1.jpg";

const Heroarea = () => {
  return (
    <div className="aha__container">
      <div className="aha__content">
        <div className="aha__top">
          <div className="aha__top__left">
            <h1>
              The Better way to Invest. The World’s Leading Investing Platform
            </h1>
            <p>
              Duplitrades invest is an investment portfolio management company that
              trades on Real Estate, Forex and Cryptocurrency. We are a trading
              platform that is focused on researching the real estate market for
              assets that can be purchased and kept on resale in order to
              generate profit for our investors. The profit made is traded in
              the forex and crypto market to generate more income this keeps the
              system going and our investors happy.
            </p>
          </div>
          <div className="aha__top__right"></div>
        </div>

        <div className="aha__bottom">
          <div className="aha__bottom__left">
            <img src={about1} alt="" />
          </div>
          <div className="aha__bottom__right">
            <p>
              Did you know that you can invest in real estate without physically
              having anything to do with the property? Such is the power of real
              estate investing companies. Duplitrades combines the power of both
              real estate and forex trading alongside crypto to ensure wealth
              creation in the company and amongst our investors. Why not take a
              tour round our offers you’ll definitely find something
              interesting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
