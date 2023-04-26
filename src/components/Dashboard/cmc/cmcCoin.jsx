import axios from "axios";
import "./cmcCoin.css";
import { useQuery } from "react-query";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

const CmcCoin = () => {
  const navigate = useNavigate();

  const { user, getDashboard, dash, getData, coins, loader } =
    useContext(UserContext);
  const [cookies, setCookie] = useCookies(["user"]);

  const addWatchList = async (val) => {
    await axios
      .put(
        "https://duplitrades-server.onrender.com/pent/user/addWatchList/",
        {
          email: user?.email,
          watchlist: [val],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.href = "/market";
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const removeWatchList = async (val) => {
    await axios
      .put(
        "https://duplitrades-server.onrender.com/pent/user/removeWatchListItem/",
        {
          coinNum: [val],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.href = "/market";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!coins) {
      getData();
      // console.log(coins);
    }

    getDashboard();
    // console.log(dash);
  }, []);

  return (
    <div className="cmc_coin">
      {loader ? (
        <div className="loader__con">
          <span class="loader"></span>
        </div>
      ) : (
        <table style={{ width: "100%", height: "100%" }}>
          <thead>
            <tr className="cmc_col col__hd">
              <th className="cmc_cell_name"></th>
              <th className="cmc_cell">Price</th>
              <th className="cmc_cell">Direct Vol. 24H</th>
              <th className="cmc_cell">Total Vol. 24H</th>
              <th className="cmc_cell">Market Cap 5</th>
              <th className="cmc_cell">Chg. 24H</th>
              <th className="cmc_cell">Favourite</th>
            </tr>
          </thead>
          <tbody style={{ width: "100%", height: "100%" }}>
            {coins?.map((coin, key) => (
              <tr key={key} className="cmc_col">
                <td className="cmc_cell_name">{coin.name}</td>
                <td className="cmc_cell">{coin.quote.USD.price.toFixed(2)}</td>
                <td className="cmc_cell">
                  ${" "}
                  {(coin?.quote.USD.volume_24h.toFixed(2) / 1000000000).toFixed(
                    1
                  )}{" "}
                  B
                </td>
                <td className="cmc_cell">
                  $ {coin?.quote.USD.volume_change_24h.toFixed(2)}B
                </td>
                <td className="cmc_cell">
                  $ {(coin?.quote.USD.market_cap / 1000000000).toFixed(2)} B
                </td>
                <td
                  className={`cmc_cell ${
                    coin?.quote.USD.percent_change_24h.toFixed(2) > 0
                      ? "cmc__green"
                      : "cmc__red"
                  }`}
                >
                  {coin?.quote.USD.percent_change_24h.toFixed(2)} %
                </td>
                <td className="cmc_cell__fav">
                  {dash?.watchlist.includes(`${coin?.cmc_rank}`) ? (
                    <AiFillHeart
                      size={20}
                      color="red"
                      onClick={() => removeWatchList(coin?.cmc_rank)}
                    />
                  ) : (
                    <AiOutlineHeart
                      size={20}
                      onClick={() => addWatchList(coin?.cmc_rank)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CmcCoin;
