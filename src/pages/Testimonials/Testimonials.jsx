import React from "react";
import "./Testimonials.css";
import alex from "../../assets/testimonials/alex.jpeg";
import ethan from "../../assets/testimonials/ethan.jpeg";
import Bosch from "../../assets/testimonials/Bosch.jpeg";
import Foster from "../../assets/testimonials/Foster.jpeg";
import Harvey from "../../assets/testimonials/Harvey.jpeg";
import Natalie from "../../assets/testimonials/Natalie.jpeg";
import Tobin from "../../assets/testimonials/Tobin.jpeg";
import Cta from "../../components/LandingPage/Cta/Cta";

const Testimonials = () => {
  return (
    <div className="tes__container">
      <div className="tes__content">
        <div className="tes__head">
          <h1>Customers Stories</h1>
          <p>What our customers have to say about us.</p>
        </div>

        <div className="tesc__con">
          <div className="tesc__container">
            <div className="tesc__content">
              <p>
                Duplitrades approach of identifying our future needs/goals and then
                working out how to achieve them is a vital approach to reduce
                the lottery of financial planning.
              </p>
              <div className="tesc__profile">
                <img src={alex} alt="" />
                <p>Alex Jarrah</p>
              </div>
            </div>
          </div>

          <div className="tesc__container">
            <div className="tesc__content">
              <p>
                I have been with Duplitrades now for like three years. This company
                has made an effort to get to know us and so the service we
                receive feels very personal.
              </p>
              <div className="tesc__profile">
                <img src={ethan} alt="" />
                <p>Ethan Kings</p>
              </div>
            </div>
          </div>

          <div className="tesc__container">
            <div className="tesc__content">
              <p>Very easy to use, slow service reply tho</p>
              <div className="tesc__profile">
                <img src={Foster} alt="" />
                <p>Lauren Foster</p>
              </div>
            </div>
          </div>

          <div className="tesc__container">
            <div className="tesc__content">
              <p>
                I started using Duplitrades Last week and it is very interesting and
                Promising
              </p>
              <div className="tesc__profile">
                <img src={Harvey} alt="" />
                <p>Harvey Young</p>
              </div>
            </div>
          </div>

          <div className="tesc__container">
            <div className="tesc__content">
              <p>
                This platform actually helps fight against poverty. you can
                invest and earn. they help secure future savings. Make a choice
                to follow Duplitrades you can never regret this decision thanks
              </p>
              <div className="tesc__profile">
                <img src={Natalie} alt="" />
                <p>Natalie Nicholas</p>
              </div>
            </div>
          </div>

          <div className="tesc__container">
            <div className="tesc__content">
              <p>
                Duplitrades has helped me to save and grow my investment. Shout out
                to Duplitrades...
              </p>
              <div className="tesc__profile">
                <img src={Bosch} alt="" />
                <p>Ed Bosch</p>
              </div>
            </div>
          </div>

          <div className="tesc__container">
            <div className="tesc__content">
              <p>
                Duplitrades has really helped me in terms of my savings habit.
                Saving has been one of the biggest issues I’ve had in my
                personal finance but thanks to the whole Duplitrades team, I’ve been
                able to discipline myself and my finances have greatly improved
                since the last two years I started with them. gracias to the
                team and especially Maureen whom I’m always disturbing with my
                issues😂
              </p>
              <div className="tesc__profile">
                <img src={Tobin} alt="" />
                <p>Luca Tobin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default Testimonials;
