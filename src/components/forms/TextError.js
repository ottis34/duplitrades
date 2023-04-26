import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

function TextError(props) {
  return (
    <div className="error">
      <RiErrorWarningFill size={20} /> {props.children}
    </div>
  );
}

export default TextError;
