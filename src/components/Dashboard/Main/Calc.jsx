import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import "./Market.css";
import { UserContext } from "../../../context/UserContext";

const Calc = () => {
  const { setWidName } = useContext(UserContext);

  useEffect(() => {
    setWidName("calc");
  });

  return (
    <>
      <div className="dash__main">
        <div className="calc__con">
          <img src={logo} />
        </div>
      </div>
    </>
  );
};

export default Calc;
