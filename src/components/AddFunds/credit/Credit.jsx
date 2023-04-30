import "./Credit.css";
import real from "../../../assets/real.svg";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const Credit = ({ setCR, setD1 }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="credit_section">
      <img src={real} alt="" />
      <div className="addfunds_text">real account</div>

      <div className="acc_bal">${user?.amount}</div>

      <div
        className="addfunds_btn"
        onClick={() => {
          setCR(false);
          setD1(true);
        }}
      >
        <span className="real_funds">add real funds</span>
        <span className="min_deposit">minimal deposit : $20.00</span>
      </div>
    </div>
  );
};

export default Credit;
