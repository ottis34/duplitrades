import React from "react";
import "./WhyPentax.css";
import fees from "../../../assets/landingPage/fees.svg";
import interest from "../../../assets/landingPage/interest.svg";
import learn from "../../../assets/landingPage/learn.svg";
import lock from "../../../assets/landingPage/lock.svg";
import trust from "../../../assets/landingPage/trust.svg";
import Media from "react-media";

const WhyPentax = () => {
  return (
    <div className="wp__container">
      <div className="wp__content">
        <div className="wp__cards">
          <div className="wp__info">
            <h2>Why Duplitrades?</h2>
            <div className="wp__text__p">
              <p>
                Duplitrades is the best and safest savings and investment firm, was
                established to provide intelligent portfolios with its expert
                investors, customer-priority approach, safe and high-tech
                investment tools.
              </p>
              <p>
                We also provide our clients with free insurance purchased from
                Lloyd’s of London, one of the world’s leading providers of
                specialist insurance, giving coverage of up to 1 million Euro,
                GBP,USD or AUD (depending on the region)....
              </p>
            </div>

            <div className="wp__more">
              <p>LEARN MORE</p>
              <hr />
            </div>
          </div>
          <Media queries={{ small: "(max-width: 768px)" }}>
            {(matches) =>
              matches.small ? (
                <div className="wp__cards__div">
                  <div className="wp__card">
                    <img src={interest} alt="" />
                    <div className="wp__text">
                      <h3>High Interest Returns</h3>
                      <p>
                        Duplitrades pays you high interest compared to other
                        platforms.
                      </p>
                    </div>
                  </div>

                  <div className="wp__card">
                    <img src={fees} alt="" />
                    <div className="wp__text">
                      <h3>No Hidden Fees</h3>
                      <p>
                        Your account doesn't come with any charge, and no SMS
                        fees!
                      </p>
                    </div>
                  </div>

                  <div className="wp__card">
                    <img src={trust} alt="" />
                    <div className="wp__text">
                      <h3>Trusted & Secured</h3>
                      <p>
                        Duplitrades is highly secure and trusted by thousands of
                        people like you taking advantage of the great services
                        and support we provide.
                      </p>
                    </div>
                  </div>

                  <div className="wp__card">
                    <img src={learn} alt="" />
                    <div className="wp__text">
                      <h3>Learn & Connect</h3>
                      <p>
                        Duplitrades are in partnership with Entrepreneur Platform
                        that will let you have cheap access to global online
                        learning institute as well as connect and collaborate
                        with like minds.
                      </p>
                    </div>
                  </div>

                  <div className="wp__card">
                    <img src={lock} alt="" />
                    <div className="wp__text">
                      <h3>Strong Security</h3>
                      <p>
                        Duplitrades uses the highest levels of Internet Security,
                        and it is secured by 256 bits SSL security encryption to
                        ensure that your information is completely protected
                        from fraud. Also uses a powerful blockchain security
                        protocol to secure users account against hackers.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="wp__card">
                    <img src={interest} alt="" />
                    <div className="wp__text">
                      <h3>High Interest Returns</h3>
                      <p>
                        Duplitrades pays you high interest compared to other
                        platforms.
                      </p>
                    </div>
                  </div>

                  <div className="wp__card">
                    <img src={fees} alt="" />
                    <div className="wp__text">
                      <h3>No Hidden Fees</h3>
                      <p>
                        Your account doesn't come with any charge, and no SMS
                        fees!
                      </p>
                    </div>
                  </div>

                  <div className="wp__card">
                    <img src={trust} alt="" />
                    <div className="wp__text">
                      <h3>Trusted & Secured</h3>
                      <p>
                        Duplitrades is highly secure and trusted by thousands of
                        people like you taking advantage of the great services
                        and support we provide.
                      </p>
                    </div>
                  </div>

                  <div className="wp__card">
                    <img src={learn} alt="" />
                    <div className="wp__text">
                      <h3>Learn & Connect</h3>
                      <p>
                        Duplitrades are in partnership with Entrepreneur Platform
                        that will let you have cheap access to global online
                        learning institute as well as connect and collaborate
                        with like minds.
                      </p>
                    </div>
                  </div>

                  <div className="wp__card">
                    <img src={lock} alt="" />
                    <div className="wp__text">
                      <h3>Strong Security</h3>
                      <p>
                        Duplitrades uses the highest levels of Internet Security,
                        and it is secured by 256 bits SSL security encryption to
                        ensure that your information is completely protected
                        from fraud. Also uses a powerful blockchain security
                        protocol to secure users account against hackers.
                      </p>
                    </div>
                  </div>
                </>
              )
            }
          </Media>
        </div>
      </div>
    </div>
  );
};

export default WhyPentax;
