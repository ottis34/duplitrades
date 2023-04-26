import React, { useState, useEffect, useRef } from "react";
import "./Stories.css";

import soma from "../../../assets/landingPage/soma.gif";
import chart from "../../../assets/landingPage/chart.png";

import user from "../../../assets/landingPage/user.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Media from "react-media";

const testimonials = [
  {
    name1: "Ava Patricia",
    testimonial1:
      "Duplitrades has helped me save and grow my investment. Shout out toduplitrades",
    name2: "Anthony Jacob",
    testimonial2:
      "I have been with duplitrades for like three years. This Comapany hasmade an effort to know us and so the services we receive feels very personal",
  },
  {
    name1: "Anthony Jacob",
    testimonial1:
      "I have been with duplitrades for like three years. This Comapany hasmade an effort to know us and so the services we receive feels very personal",
    name2: "Khalid Abubaka",
    testimonial2: "Very Easy to use, bad service reply tho",
  },
  {
    name1: "Khalid Abubaka",
    testimonial1: "Very Easy to use, bad service reply tho",
    name2: "Evyln",
    testimonial2:
      "I started using duplitrades last week and it is very interesting andpromising",
  },

  {
    name1: "Evyln",
    testimonial1:
      "I started using duplitrades last week and it is very interesting and promising",

    name2: "Gideon Nicholas",
    testimonial2:
      "This platform actually helps me fight against poverty. you caninvest and earn. They help secure future savings. Make a choice tofollow duplitrades you can never regret this decision thanks",
  },

  {
    name1: "Gideon Nicholas",
    testimonial1:
      "This platform actually helps me fight against poverty. you caninvest and earn. They help secure future savings. Make a choice tofollow duplitrades you can never regret this decision thanks",

    name2: " Murphy Orpin",
    testimonial2: "This guys helped me in so many ways, thanks guys",
  },

  {
    name1: " Murphy Orpin",
    testimonial1: "This guys helped me in so many ways, thanks guys",
    name2: "Ava Patricia",
    testimonial2:
      "Duplitrades has helped me save and grow my investment. Shout out toduplitrades",
  },
];

const testimonials1 = [
  {
    name1: "Ava Patricia",
    testimonial1:
      "Duplitrades has helped me save and grow my investment. Shout out toduplitrades",
  },
  {
    name1: "Anthony Jacob",
    testimonial1:
      "I have been with duplitrades for like three years. This Comapany hasmade an effort to know us and so the services we receive feels very personal",
  },
  {
    name1: "Khalid Abubaka",
    testimonial1: "Very Easy to use, bad service reply tho",
  },

  {
    name1: "Evyln",
    testimonial1:
      "I started using duplitrades last week and it is very interesting and promising",
  },

  {
    name1: "Gideon Nicholas",
    testimonial1:
      "This platform actually helps me fight against poverty. you caninvest and earn. They help secure future savings. Make a choice tofollow duplitrades you can never regret this decision thanks",
  },

  {
    name1: " Murphy Orpin",
    testimonial1: "This guys helped me in so many ways, thanks guys",
  },
];
const colors = [
  "#0088FE",
  "#00C49F",
  "#00C49F",
  "#00C49F",
  "#00C49F",
  "#00C49F",
];

const Stories = () => {
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const [activePag, setActivePag] = useState("");
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const nextPage = () => {
    setActivePag("nex");
    if (index === 5) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousPage = () => {
    setActivePag("pre");
    if (index === 0) {
      setIndex(5);
    } else {
      setIndex(index - 1);
    }
  };

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
    <div className="stories__container">
      <div className="stories__content">
        <div className="stories__info">
          <div className="stories__header">
            <h1 className="stories__h1">Customers Stories</h1>
            <p className="stories__p">
              What our customers have to say about us.
            </p>
          </div>
          <div className="stories__more">
            <p>SEE MORE STORIES</p>
            <hr />
          </div>
        </div>
        <div className="stories__img">
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              <Media queries={{ small: "(max-width: 768px)" }}>
                {(matches) =>
                  matches.small ? (
                    <div className="slideshowSlider">
                      {testimonials1.map((testimonial, index) => (
                        <div className="slide" key={index}>
                          <div className="tc__con">
                            <div className="tc__container">
                              <div className="tc__content">
                                <p>{testimonial.testimonial1}</p>
                                <div className="tc__profile">
                                  <img src={user} alt="" />
                                  <p>{testimonial.name1}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {testimonials.map((testimonial, index) => (
                        <div className="slide" key={index}>
                          <div className="tc__con">
                            <div className="tc__container">
                              <div className="tc__content">
                                <p>{testimonial.testimonial1}</p>
                                <div className="tc__profile">
                                  <img src={user} alt="" />
                                  <p>{testimonial.name1}</p>
                                </div>
                              </div>
                            </div>

                            <div className="tc__container">
                              <div className="tc__content">
                                <p>{testimonial.testimonial2}</p>
                                <div className="tc__profile">
                                  <img src={user} alt="" />
                                  <p>{testimonial.name2}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )
                }
              </Media>
            </div>
          </div>
          <div className="slideshowDots">
            <div className="stories__pagination">
              <AiOutlineLeft
                onClick={() => previousPage()}
                className={
                  activePag == "pre"
                    ? "active__pag"
                    : "stories__direction__icon"
                }
              />

              <AiOutlineRight
                className={
                  activePag == "nex"
                    ? "active__pag"
                    : "stories__direction__icon"
                }
                onClick={() => nextPage()}
              />
            </div>
            {colors.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
