import "./Balance.css";
import { TfiClose } from "react-icons/tfi";
import Deposit from "../deposit/Deposit";
import Credit from "../credit/Credit";
import { useState } from "react";

const Balance = ({ setC1 }) => {
  const [cr, setCR] = useState(true);
  const [d1, setD1] = useState(false);

  return (
    <div className="addfunds_con">
      <div className="addfunds_card">
        <div className="header">
          <div className="header_text">Make a deposit</div>
          <TfiClose className="close_btn" onClick={() => setC1(false)} />
        </div>

        <main>
          {cr && <Credit setCR={setCR} setD1={setD1} />}
          {d1 && <Deposit setD1={setD1} />}
        </main>
      </div>
    </div>
  );
};

export default Balance;
