import React from "react";
import "./AboutCards.css";
import vision from "../../../assets/about/vision.svg";
import mission from "../../../assets/about/mission.svg";

const AboutCards = () => {
  return (
    <div className="ac__container">
      <div className="ac__content">
        <div className="ac__cards">
          <div className="ac__card">
            <img src={mission} alt="" />
            <div className="ac__text">
              <h3>Mission</h3>
              <p>
                To give people the power to easily save and manage their
                finances through automation while making better financial and
                business decisions.
              </p>
            </div>
          </div>

          <div className="ac__card">
            <img src={vision} alt="" />
            <div className="ac__text">
              <h3>Vision</h3>
              <p>
                To see more happy people in the economy with successful projects
                executed without much hassle as regards financing. The more
                people save, the more they have money to carry out projects when
                the time comes, this is why Duplitrades is in Partnership with other
                reputable Entrepreneur Platform to incubate business leaders
                across various sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
