import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/landingPage/logo.png";
import "./Rotate.css";

const Rotate = () => {
  return (
    <>
      <div className="rotate__main userRotate">
        <div className="rotate__con">
          <img src={logo} />
          <p>Rotate your device for better experience</p>
        </div>
      </div>
    </>
  );
};

export default Rotate;
