import "./Widget.css";
import { BiBitcoin, BiDollar, BiEuro } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../context/UserContext";

const Converter = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const { coins } = useContext(UserContext);

  // state for coins
  const [conv, setConv] = useState([]);
  const [btc, setBtc] = useState(0);
  const [eth, setEth] = useState(0);
  const [eur, setEur] = useState(0);
  const [usd, setUsd] = useState(0);
  const [ltc, setLtc] = useState(0);

  // set values
  const [btcValue, setBtcValue] = useState(0);
  const [ethValue, setEthValue] = useState(0);
  const [eurValue, setEurValue] = useState(0);
  const [usdValue, setUsdValue] = useState(0);
  const [ltcValue, setLtcValue] = useState(0);

  const getData = async () => {
    await axios
      .get("https://duplitrades-server.onrender.com/pent/data/coins", {
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      })
      .then((res) => {
        setConv(res.data.data);
        console.log(res.data.data);

        // set btc
        setBtc(res.data.data[0].quote.USD.price.toFixed(2));
        setEth(res.data.data[1].quote.USD.price.toFixed(2));
        setEur(1.1);
        setLtc(res.data.data[12].quote.USD.price.toFixed(2));

        if (btc) {
          setBtcValue(1);
          setUsdValue(btc);
          setEthValue(btc / eth);
          setLtcValue(btc / ltc);
          setEurValue(btc / 1.1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!coins) {
      getData();
    }
    setBtc(1);
  }, []);

  // state for icons
  const initialState = {
    item1: true,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "select":
        return { ...state, [action.item]: true };
      case "deselect":
        return { ...state, [action.item]: false };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleItemClick = (item) => {
    Object.keys(state).forEach((key) => {
      if (key === item) {
        dispatch({ type: "select", item: key });
      } else {
        dispatch({ type: "deselect", item: key });
      }
    });
  };

  // handle price change

  useEffect(() => {
    setUsdValue(btcValue * btc);
    setEthValue((btcValue * btc) / eth);
    setLtcValue((btcValue * btc) / ltc);
    setEurValue((btcValue * btc) / 1.1);
  }, [btcValue]);

  return (
    <>
      {conv && (
        <div className="conv__con">
          <div className="conv__head">Converter</div>
          <div className="conv__body">
            {/* card start */}
            <div
              className={`conv__card ${state.item1 && "conv__selected"}`}
              onClick={() => handleItemClick("item1")}
            >
              <div className="conv__left">
                <BiBitcoin className="conv__icon" />
                Bitcoin
              </div>
              <div className="conv__right">
                <input
                  type="text"
                  value={btcValue}
                  onChange={(e) => setBtcValue(e.target.value)}
                />
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div
              className={`conv__card ${state.item2 && "conv__selected"}`}
              onClick={() => handleItemClick("item2")}
            >
              <div className="conv__left">
                <FaEthereum className="conv__icon" />
                Ethereum
              </div>
              <div className="conv__right">
                <input type="text" value={ethValue} disabled />
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div
              className={`conv__card ${state.item3 && "conv__selected"}`}
              onClick={() => handleItemClick("item3")}
            >
              <div className="conv__left">
                <BiEuro className="conv__icon" />
                EURO
              </div>
              <div className="conv__right">
                <input type="text" value={eurValue} disabled />
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div
              className={`conv__card ${state.item4 && "conv__selected"}`}
              onClick={() => handleItemClick("item4")}
            >
              <div className="conv__left">
                <BiDollar className="conv__icon" />
                DOLLAR
              </div>
              <div className="conv__right">
                <input type="text" value={usdValue} disabled />
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div
              className={`conv__card ${state.item5 && "conv__selected"}`}
              onClick={() => handleItemClick("item5")}
            >
              <div className="conv__left">
                <SiLitecoin className="conv__icon" />
                LITECOIN
              </div>
              <div className="conv__right">
                <input type="text" value={ltcValue} disabled />
              </div>
            </div>
            {/* card end */}
          </div>
        </div>
      )}
    </>
  );
};

export default Converter;
