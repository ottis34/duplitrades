import "./Deposit.css";
import coinbase from "../../../assets/coinbasecommerce.svg";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { useCookies } from "react-cookie";

const Deposit = ({ setCR }) => {
  const [amount, setAmount] = useState(20);
  const { user } = useContext(UserContext);
  const [cookies, setCookie] = useCookies(["user"]);

  const addFunds = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://duplitrades-server.onrender.com/pent/user/coinbase/",
        {
          email: user?.email,
          product: {
            name: user?.fullName,
            id: user?._id,
            description: "Deposit into Duplitrades",
            price: amount,
            currency: "USD",
            crypto: "USD",
            method: "coinbase ecommerce",
            status: "Not Paid",
            type: "Deposit",
            redirect_url:
              "https://duplitrades-server.onrender.compent/user/fundAccount",
            cancel_url: "https://duplitrades.com/",
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
        console.log(res.data.hosted_url);
        console.log(user?._id);
        window.location.href = `${res.data.hosted_url}`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="deposit_section">
      <div className="deposit_left">
        <div className="currency_block">usd</div>
      </div>

      <div className="deposit_right">
        <div className="dep_right_text">deposit amount</div>

        <div className="deposit_slider">
          <div className="slider_wraper">
            <div className="slider_con">
              <div className="slider_con">
                $
                <input
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  min="20"
                  max="10000"
                  maxLength="5"
                  value={amount}
                  placeholder="20"
                />
              </div>
            </div>
          </div>

          <div className="slider_btns">
            <div className="slider_btn_card">
              <div className="slider_text">amount</div>

              <div className="change_value">
                <div className="currency">$</div>
                <div className="btn_amount">{amount}</div>
              </div>
            </div>

            <div className="slider_btn_card">
              <div className="slider_text">% Fees (2.50 %)</div>

              <div className="change_value">
                <div className="currency">$</div>
                <div className="btn_fees">{(amount * 2.5) / 100}</div>
              </div>
            </div>

            <div className="slider_btn_card total_style">
              <div className="slider_text total_style">total</div>

              <div className="change_value">
                <div className="currency">$</div>
                <div className="btn_total">{amount + (amount * 2.5) / 100}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="coinbase_con">
          <div className="coinbase" onClick={addFunds}>
            <img src={coinbase} alt="" />
          </div>

          <div className="deposit_fees">+ 1.5 % Fees</div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
