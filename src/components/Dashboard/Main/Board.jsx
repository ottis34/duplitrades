import React from "react";
import TradingViewWidget from "../TradingViewChart/TradingViewWidget";
import Widget from "../Widget/Widget";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Board = () => {
  return (
    <>
      <div className="dash__main">
        <TradingViewWidget />
      </div>
    </>
  );
};

export default Board;
