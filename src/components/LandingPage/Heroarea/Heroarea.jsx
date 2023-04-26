import React, { useState, useEffect, useRef } from "react";
import "./Heroarea.css";

import soma from "../../../assets/landingPage/soma.gif";
import chart from "../../../assets/landingPage/chart.png";

const images = [chart, soma];
const colors = ["#0088FE", "#00C49F"];

const Heroarea = () => {
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="ha__container">
      <div className="ha__content">
        <div className="ha__info">
          <div className="ha__header">
            <h1 className="ha__h1">Invest With Confidence.</h1>
            <p className="ha__p">
              Join millions who've already discovered smarter investing by
              automatically copying the leading traders in our community and
              earn 25% minimum.
            </p>
          </div>
        </div>
        <div className="ha__img">
          <div className="slideshow1">
            <div
              className="slideshowSlider1"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {images.map((image, index) => (
                <div className="slide" key={index}>
                  <img src={image} alt="Image" className="haImg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
