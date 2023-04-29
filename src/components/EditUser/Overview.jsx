import "./Overview.css";
import { useState } from "react";
import OverviewDetails from "./OverviewDetails";
import UserSettings from "./UserSettings";
import Transactions from "./Transactions";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Overview = ({ userEmail, setU1 }) => {
  const [o1, setO1] = useState(true);
  const [us, setUS] = useState(false);
  const [tr, setTR] = useState(false);

  return (
    <div className="overview_con">
      <div className="overview_card">
        <div className="overview_header">
          <ul>
            <li
              className={`${o1 && "overview_header_select"}`}
              onClick={() => {
                setO1(true);
                setUS(false);
                setTR(false);
              }}
            >
              overview
            </li>

            <li
              className={`${us && "overview_header_select"}`}
              onClick={() => {
                setO1(false);
                setUS(true);
                setTR(false);
              }}
            >
              user settings
            </li>

            <li
              className={`${tr && "overview_header_select"}`}
              onClick={() => {
                setO1(false);
                setUS(false);
                setTR(true);
              }}
            >
              transaction history
            </li>
          </ul>
        </div>

        <div className="overview_main_con">
          {o1 && (
            <OverviewDetails
              userEmail={userEmail}
              setUS={setUS}
              setTR={setTR}
              setO1={setO1}
            />
          )}
          {us && <UserSettings userEmail={userEmail} />}
          {tr && <Transactions userEmail={userEmail} />}
        </div>

        <div className="overview_back">
          <MdOutlineArrowBackIos
            onClick={() => {
              setU1(false);
            }}
            color="red"
            size={50}
            style={{ cursor: "pointer" }}
          />{" "}
          <p
            onClick={() => {
              setU1(false);
            }}
          >
            Back
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
