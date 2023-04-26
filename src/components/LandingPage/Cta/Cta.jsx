import React from "react";
import "./Cta.css";
const Cta = () => {
  const handleGo = (val) => {
    window.location.href = val;
  };
  return (
    <>
      <div className="cta__container">
        <div className="cta__content">
          <div className="cta__head">
            <h1>Create Account in a minute!</h1>
            <p>
              Create a Duplitrades Account, invest your first $500 and watch
              your money grow
            </p>
          </div>
          <div className="cta__link" onClick={() => handleGo("/signup")}>
            <p onClick={() => handleGo("/signup")}>CREATE ACCOUNT NOW</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
