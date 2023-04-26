import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";

const WatchList = () => {
  const { user, getDashboard, dash, getData, coins } = useContext(UserContext);

  const [watchlist, setWatchlist] = useState();

  const getWatchList = () => {
    if (coins && dash) {
      setWatchlist(
        coins.filter((obj) => dash.watchlist.includes(`${obj.cmc_rank}`))
      );

      console.log("newArr", watchlist);
    }
  };

  useEffect(() => {
    if (!coins) {
      getData();
      console.log("coins", coins);
      console.log("COIN AGAIN");
    }

    getDashboard();
    console.log(dash);

    getWatchList();
    console.log("watchlist", watchlist);
  }, []);

  return (
    <div className="watch__con">
      <div className="watch__head">
        <p>WATCHLIST</p>
        <p className="watch__head__gray">
          {watchlist && (
            <>
              {watchlist[0]?.symbol}
              {watchlist[1]?.symbol}
            </>
          )}
          ...
        </p>
      </div>

      <div className="watch__body">
        <div className="watch__title">
          <p className="watch_cell">Symbol</p>
          <p className="watch_cell">Last</p>
          <p className="watch_cell">Chng (%)</p>
        </div>
        <div className="watch__row">
          {watchlist && (
            <>
              {watchlist?.map((item, key) => (
                <div className="watch_col" key={key}>
                  <p className="watch_cell">{item.symbol}</p>
                  <p className="watch_cell">
                    {item.quote.USD.price.toFixed(2)}
                  </p>
                  <p className="watch_cell">
                    {item.quote.USD.percent_change_24h > 0 ? (
                      <span style={{ color: "green" }}>
                        {item.quote.USD.percent_change_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span style={{ color: "red" }}>
                        {item.quote.USD.percent_change_24h.toFixed(2)}%
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
