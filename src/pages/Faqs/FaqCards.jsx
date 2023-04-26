import React, { useState } from "react";
import "./Faqs.css";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import parse from "html-react-parser";
const FaqCards = ({ name, info }) => {
  const [state, setState] = useState(false);
  return (
    <div className="faqc__container">
      <div className="faqc__content">
        <div className="faqc__left">
          {state ? (
            <BsChevronDown
              style={{ cursor: "pointer" }}
              size={20}
              fontWeight={900}
              onClick={() => setState(!state)}
            />
          ) : (
            <BsChevronRight
              style={{ cursor: "pointer" }}
              size={20}
              fontWeight={900}
              onClick={() => setState(!state)}
            />
          )}
        </div>
        <div className="faqc__right">
          <h3 onClick={() => setState(!state)}>{name}</h3>
          <div className={state ? "faqc__info" : "faqc__info cancel"}>
            <hr />
            <p>{parse(info)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCards;
