import React, { useContext, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import TradingViewWidget from "../TradingViewChart/TradingViewWidget";
import News from "../Widget/News";
import Widget from "../Widget/Widget";
import { UserContext } from "../../../context/UserContext";
import Calc from "./Calc";

const NewsPage = () => {
  const { setWidName } = useContext(UserContext);

  useEffect(() => {
    setWidName("news");
  });

  return (
    <>
      <div className="news__main">
        <Calc />
      </div>
    </>
  );
};

export default NewsPage;
