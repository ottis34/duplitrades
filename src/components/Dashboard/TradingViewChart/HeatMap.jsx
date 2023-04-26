import React, { useEffect } from "react";
import "./TradingViewWidget.css";

const HeatMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 800,
      currencies: [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY",
      ],
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
    });

    const container = document.getElementById("tr-market");
    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="tr-ma" id="tr-market">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </>
  );
};

export default HeatMap;
