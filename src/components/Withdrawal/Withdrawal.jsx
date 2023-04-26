import "./Withdrawal.css";
import { TfiClose } from "react-icons/tfi";
import fueldispenser from "../../assets/fueldispenser.svg";
import { useState } from "react";

const Withdrawal = ({ setR1 }) => {
  return (
    <div className="withdrawal_con">
      <div className="withdraw_card">
        <div className="header">
          <div className="header_text">Ask a withdraw</div>
          <TfiClose className="close_btn" onClick={() => setR1(false)} />
        </div>

        <div className="withdraw_section">
          <img src={fueldispenser} alt="" />

          <div className="withdraw_section_text">
            you don't have any filled balance yet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
