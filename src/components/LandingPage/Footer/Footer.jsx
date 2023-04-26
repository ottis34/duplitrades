import React from "react";
import "./Footer.css";
import logo from "../../../assets/landingPage/logo.png";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const handleGo = (val) => {
    window.location.href = val;
  };
  return (
    <div className="footer">
      <footer>
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__col">
              <h4>Company</h4>
              <ul>
                <li onClick={() => handleGo("/about")}>About</li>
                <li>Blog</li>
                <li onClick={() => handleGo("/testimonials")}>Testimonials</li>
                <li onClick={() => handleGo("/faqs")}>FAQs</li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Legal</h4>
              <ul>
                <li onClick={() => handleGo("/terms")}>Privacy Policy</li>
                <li onClick={() => handleGo("/terms")}>Terms & Conditions</li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Contact Info</h4>
              <ul>
                <li className="footer__info">
                  <p>1330 Post Oak Blvd Suite 2700 Houston, TX 77056.</p>
                </li>
                <li className="footer__info">
                  <BsTelephoneFill />
                  <p>+1 (914) 207‑3357</p>
                </li>

                <li className="footer__info">
                  <GrMail />
                  <p>Support@Duplitrades.io</p>
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <hr />
        <p>
          Copyright © 2022 All rights reserved. Duplitrades Global Limited - CN
        </p>
      </div>
    </div>
  );
};

export default Footer;
