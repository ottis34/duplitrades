import React, { useContext, useEffect, useState } from "react";
import HeatMap from "../TradingViewChart/HeatMap";
import TrMarket from "../TradingViewChart/TradingMarket";
import CmcCoin from "../cmc/cmcCoin";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../context/UserContext";

const Market = () => {
  const { setWidName } = useContext(UserContext);

  const [coin, setCoin] = useState(true);
  const [market, setMarket] = useState(false);
  const [heat, setHeat] = useState(false);

  const handleCoin = () => {
    setCoin(true);
    setHeat(false);
    setMarket(false);
  };
  const handleMarket = () => {
    setMarket(true);
    setCoin(false);
    setHeat(false);
  };
  const handleHeat = () => {
    setHeat(true);
    setCoin(false);
    setMarket(false);
  };

  useEffect(() => {
    setWidName("market");
  });

  return (
    <>
      <div className="dash__main">
        <nav className="market-nav">
          <ul>
            <li
              onClick={handleCoin}
              style={{ color: "#576377", fontSize: "12px" }}
            >
              coin list
            </li>
            <li
              onClick={handleMarket}
              style={{ color: "#576377", fontSize: "12px" }}
            >
              market list
            </li>
            <li
              onClick={handleHeat}
              style={{ color: "#576377", fontSize: "12px" }}
            >
              heatmap
            </li>
          </ul>
        </nav>

        {/* {coin && <CmcCoin />} */}
        {coin && <CmcCoin />}
        {market && <TrMarket />}
        {heat && <HeatMap />}
      </div>
    </>
  );
};

export default Market;
