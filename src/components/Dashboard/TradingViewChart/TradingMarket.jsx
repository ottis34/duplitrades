import { useEffect } from "react";
import "./TradingViewWidget.css";

const TrMarket = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 600,
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "light",
      locale: "en",
    });

    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    container.appendChild(script);

    // return () => {
    //   container.removeChild(script);
    // };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TrMarket;
