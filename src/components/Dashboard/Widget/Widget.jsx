import React from "react";
import Converter from "./Converter";
import News from "./News";
import Orderbook from "./Orderbook";
import WatchList from "./WatchList";

const Widget = ({ isWidget, widName }) => {
  return (
    <>
      {isWidget && (
        <div className="widd">
          {widName === "calc" && <Converter />}
          {widName === "market" && <WatchList />}
          {widName === "order" && <Orderbook />}
          {widName === "news" && <News />}
        </div>
      )}
    </>
  );
};

export default Widget;
