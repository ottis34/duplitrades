import "./Withdraw_wallets.css";
import paypal from "../../../assets/paypal.svg";
import banktransfer from "../../../assets/banktransfer.svg";
import cryptocurrency from "../../../assets/cryptocurrencies.svg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { useCookies } from "react-cookie";

const Withdraw_wallets = () => {
  const { user, getDashboard, dash, setDash } = useContext(UserContext);

  const [cookies, setCookie] = useCookies(["user"]);
  const [walAddr, setWalAddr] = useState("");
  const [coinType, setCoinType] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      if (cookies) {
        if (cookies?.userToken) {
          await getDashboard();
        }
      } else {
        setDash(null);
      }
    };

    checkAuth();
  }, [cookies]);

  const [w1, setW1] = useState(false);
  const [w2, setW2] = useState(false);
  const [w3, setW3] = useState(false);
  const [w4, setW4] = useState(true);

  const [bank, setBank] = useState("");
  const [bank_addr, setBank_addr] = useState("");
  const [bank_city, setBank_city] = useState("");
  const [bank_country, setBank_country] = useState("");
  const [bank_acctNum, setBank_acctNum] = useState("");
  const [bank_code, setBank_code] = useState("");

  const updateBank = async (e) => {
    e.preventDefault();
    await axios
      .put(
        "https://duplitrades-server.onrender.com/pent/user/updateBank/",
        {
          email: user?.email,
          bankDetails: {
            bank: bank ? bank : dash?.bank,
            bank_addr: bank_addr ? bank_addr : dash?.bank_addr,
            bank_city: bank_city ? bank_city : dash?.bank_city,
            bank_country: bank_country ? bank_country : dash?.bank_country,
            bank_acctNum: bank_acctNum ? bank_acctNum : dash?.bank_acctNum,
            bank_code: bank_code ? bank_code : dash?.bank_code,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        setW2(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Form data");
  };

  const addWallet = async (e) => {
    e.preventDefault();
    await axios
      .put(
        "https://duplitrades-server.onrender.com/pent/user/addWalletAddress/",
        {
          email: user?.email,
          walletAddress: {
            coin: coinType,
            addr: walAddr,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        setW3(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Form data");
  };

  const handleW1 = () => {
    setW1(true);
    setW2(false);
    setW3(false);
    setW4(false);
  };
  const handleW2 = () => {
    setW1(false);
    setW2(true);
    setW3(false);
    setW4(false);
  };
  const handleW3 = () => {
    setW1(false);
    setW2(false);
    setW3(true);
    setW4(false);
  };

  const handleW4 = () => {
    setW1(false);
    setW2(false);
    setW3(false);
    setW4(true);
  };

  return (
    <div className="cardboard_con">
      <div className="cardboard" onClick={handleW1}>
        <img src={paypal} alt="" />
      </div>

      <div className="cardboard" onClick={handleW2}>
        <img src={banktransfer} alt="" />
      </div>

      <div className="cardboard" onClick={handleW3}>
        <img src={cryptocurrency} alt="" />
      </div>

      {w1 && (
        <div className="popup_con">
          <div className="generic_cardboard">
            <img src={paypal} alt="" />

            <form>
              <label for="paypal_email">paypal email</label>
              <input
                type="email"
                id="paypal_email"
                placeholder="Paypal email"
              />

              <div className="popup_btns">
                <div className="cancel_btn" onClick={handleW4}>
                  Cancel
                </div>

                <input type="submit" value="Next" />
              </div>
            </form>
          </div>
        </div>
      )}

      {w2 && (
        <div className="popup_con">
          <div className="bank_cardboard">
            <img src={banktransfer} alt="" />

            <form onSubmit={updateBank}>
              <label for="bank_name">bank name</label>
              <input
                value={bank}
                type="text"
                onChange={(e) => setBank(e.target.value)}
                id="bank_name"
                placeholder="Bank name"
              />

              <div className="bank_subcon">
                <div className="subcon_left">
                  <label for="bank_addr">bank address</label>
                  <input
                    type="text"
                    value={bank_addr}
                    onChange={(e) => setBank_addr(e.target.value)}
                    id="bank_addr"
                    placeholder="Bank address"
                  />

                  <label for="bank_coun">bank country</label>
                  <input
                    type="text"
                    value={bank_country}
                    onChange={(e) => setBank_country(e.target.value)}
                    id="bank_coun"
                    placeholder="Bank country"
                  />

                  <label for="swift_code">swift code</label>
                  <input
                    type="text"
                    value={bank_code}
                    onChange={(e) => setBank_code(e.target.value)}
                    id="swift_code"
                    placeholder="Swift code"
                  />

                  <label for="your_addr">your address</label>
                  <input
                    type="text"
                    id="your_addr"
                    disabled
                    placeholder="Your address"
                  />
                </div>

                <div className="subcon_right">
                  <label for="bank_city">bank city</label>
                  <input
                    disabled
                    value={bank_city}
                    onChange={(e) => setBank_city(e.target.value)}
                    type="text"
                    id="bank_city"
                    placeholder="Bank city"
                  />

                  <label for="bank_acc">bank account number / iban</label>
                  <input
                    type="text"
                    value={bank_acctNum}
                    onChange={(e) => setBank_acctNum(e.target.value)}
                    id="bank_acc"
                    placeholder="Bank name"
                  />

                  <label for="first_last">your first and last name</label>
                  <input
                    type="text"
                    id="first_last"
                    placeholder="Your first and last name"
                  />

                  <label for="your_coun">your country</label>
                  <input
                    type="text"
                    id="your_coun"
                    placeholder="Your country"
                  />
                </div>
              </div>

              <label for="yourcity">Your city</label>
              <input type="text" id="yourcity" placeholder="Your city" />

              <div className="popup_btns">
                <div className="cancel_btn" onClick={handleW4}>
                  Cancel
                </div>

                <input type="submit" value="Next" />
              </div>
            </form>
          </div>
        </div>
      )}

      {w3 && (
        <div className="popup_con">
          <div className="generic_cardboard">
            <img src={cryptocurrency} alt="" />

            <form onSubmit={addWallet}>
              <label for="generic_email">cryptocurrency name</label>
              <select
                className="select_cry"
                name="cryptocurrency_name"
                onChange={(e) => setCoinType(e.target.value)}
              >
                <option value="BTC"> BTC</option>
                <option value="VITE">VITE</option>
                <option>LAZIO</option>
                <option>SANTOS</option>
                <option>ALPINE</option>
                <option>PORTO</option>
                <option>REN</option>
                <option>CELR</option>
                <option>SKL</option>
                <option>WAXP</option>
                <option>TFUEL</option>
                <option>LTO</option>
                <option>FET</option>
                <option>BOND</option>
                <option>LOKA</option>
                <option>ICP</option>
                <option>T</option>
                <option>OP</option>
                <option>OCEAN</option>
                <option>THETA</option>
                <option>CELO</option>
                <option>VOXEL</option>
                <option>ENS</option>
                <option>WBTC</option>
                <option>REQ</option>
                <option>APE</option>
                <option>FLUX</option>
                <option>TRX</option>
                <option>COTI</option>
                <option>RLC</option>
                <option>GTC</option>
                <option>UST</option>
                <option>BICO</option>
                <option>API3</option>
                <option>BNT</option>
                <option>IMX</option>
                <option>SPELL</option>
                <option>JASMY</option>
                <option>FLOW</option>
                <option>ROSE</option>
                <option>KDA</option>
                <option>SNX</option>
                <option>MASK</option>
                <option>CLV</option>
                <option>TUSD</option>
                <option>QNT</option>
                <option>STG</option>
                <option>AXL</option>
                <option>KAVA</option>
                <option>APT</option>
                <option>BOSON</option>
                <option>POLYX</option>
                <option>POND</option>
                <option>MXC</option>
                <option>JAM</option>
                <option>PROM</option>
                <option>DIA</option>
                <option>LOOM</option>
                <option>STMX</option>
                <option>GLM</option>
                <option>BAL</option>
                <option>KSM</option>
                <option>RARE</option>
                <option>ACH</option>
                <option>DAR</option>
                <option>RNDR</option>
                <option>SYS</option>
                <option>RAD</option>
                <option>ILV</option>
                <option>LDO</option>
                <option>LSK</option>
                <option>SAND</option>
                <option>DGB</option>
                <option>REEF</option>
                <option>SRM</option>
                <option>ALICE</option>
                <option>FORTH</option>
                <option>ASTR</option>
                <option>BTRST</option>
                <option>GAL</option>
                <option>AUDIO</option>
                <option>TLM</option>
                <option>USD4</option>
                <option>ZIL</option>
                <option>NEO</option>
                <option>VET</option>
                <option>QTUM</option>
                <option>NANO</option>
                <option>ICX</option>
                <option>ENJ</option>
                <option>ONT</option>
                <option>XTZ</option>
                <option>WAVES</option>
                <option>HBAR</option>
                <option>OMG</option>
                <option>MATIC</option>
                <option>REP</option>
                <option>EOS</option>
                <option>KNC</option>
                <option>VTHO</option>
                <option>ATOM</option>
                <option>DOGE</option>
                <option>COMP</option>
                <option>BAT</option>
                <option>ETH</option>
                <option>XRP</option>
                <option>BCH</option>
                <option>LTC</option>
                <option>USDT</option>
                <option>BNB</option>
                <option>ADA</option>
                <option>ETC</option>
                <option>BUSD</option>
                <option>XLM</option>
                <option>ZRX</option>
                <option>LINK</option>
                <option>RVN</option>
                <option>DASH</option>
                <option>ZEC</option>
                <option>ALGO</option>
                <option>IOTA</option>
                <option>USDC</option>
                <option>MANA</option>
                <option>GALA</option>
                <option>KSHIB</option>
                <option>CTSI</option>
                <option>DOT</option>
                <option>YFI</option>
                <option>1INCH</option>
                <option>FTM</option>
                <option>NEAR</option>
                <option>LRC</option>
                <option>LPT</option>
                <option>AXS</option>
                <option>POLY</option>
                <option>NMR</option>
                <option>SLP</option>
                <option>ANT</option>
                <option>XNO</option>
                <option>CHZ</option>
                <option>OGN</option>
                <option>AVAX</option>
                <option>CRV</option>
                <option>HNT</option>
                <option>EGLD</option>
                <option>MKR</option>
                <option>DAI</option>
                <option>ONE</option>
                <option>BAND</option>
                <option>STORJ</option>
                <option>UNI</option>
                <option>SOL</option>
                <option>PAXG</option>
                <option>SHIB</option>
                <option>OXT</option>
                <option>ZEN</option>
                <option>FIL</option>
                <option>AAVE</option>
                <option>GRT</option>
                <option>SUSHI</option>
                <option>ANKR</option>
                <option>AMP</option>
              </select>

              <label for="address">address</label>
              <input
                type="text"
                id="address"
                onChange={(e) => setWalAddr(e.target.value)}
                placeholder="Address"
              />

              <div className="popup_btns">
                <div className="cancel_btn" onClick={handleW4}>
                  Cancel
                </div>

                <input type="submit" value="Next" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw_wallets;
