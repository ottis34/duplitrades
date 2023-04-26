import React from "react";
import phone from "../../../assets/landingPage/soma.jpg";
import "./GetStarted.css";

const GetStarted = () => {
  const handleGo = (val) => {
    window.location.href = val;
  };

  return (
    <div className="gs__container">
      <div className="gs__content">
        <div className="gs__left">
          <img src={phone} alt="" />
        </div>
        <div className="gs__right">
          <div className="gs__head">
            <h2>How to get started</h2>
            <p>Get started in less than 5 minutes.</p>
          </div>

          <div className="gs__steps">
            <div className="gs__step">
              <div className="gs__number">
                <p>1</p>
              </div>
              <div className="gs__text">
                <h3>Account Setup</h3>
                <p>
                  Enter the information you need to become a member and start
                  right away.
                </p>
              </div>
            </div>

            <div className="gs__step">
              <div className="gs__number">
                <p>2</p>
              </div>
              <div className="gs__text">
                <h3>Select a plan that suites your budget</h3>
                <p>
                  Select a standard plan, a project that suits your budget or a
                  saving plan with a good duration and interest.
                </p>
              </div>
            </div>

            <div className="gs__step">
              <div className="gs__number">
                <p>3</p>
              </div>
              <div className="gs__text">
                <h3>Watch your investment grow</h3>
                <p>
                  Invest and sit back. You can follow your investment status at
                  any time and invest in limited time special offers.
                </p>
              </div>
            </div>

            <div className="gs__step">
              <div className="gs__number">
                <p>4</p>
              </div>
              <div className="gs__text">
                <h3>Payout Day</h3>
                <p>
                  Your investment is eligible to withdraw anytime after the
                  first 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="gs__account" onClick={() => handleGo("/signup")}>
            <p onClick={() => handleGo("/signup")}>CREATE ACCOUNT NOW</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
