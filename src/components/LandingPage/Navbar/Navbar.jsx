import React, { useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/landingPage/logo.png";
import Media from "react-media";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdHorizontalRule } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const openState = () => {
    setOpen(!open);
  };

  const gotoHome = () => {
    navigate("/");
  };

  const gotoSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="nav__container">
      <Media queries={{ small: "(max-width: 768px)" }}>
        {(matches) =>
          matches.small ? (
            <div
              style={{
                position: "relative",
                backgroundColor: "#fff",
                zIndex: 1,
                top: 0,
              }}
              className="nav__con"
            >
              <div className="nav__content">
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                  className="lp__nav__logo"
                >
                  <img src={logo} alt="" />
                </div>
                <div className="nav__center"></div>
                <div onClick={openState} className="bar">
                  {open ? (
                    <MdHorizontalRule className="menu__icon" />
                  ) : (
                    <FiMenu className="menu__icon" />
                  )}
                </div>
              </div>
              <div className={open ? "s__nav__items" : "closed"}>
                <div className="s__nav__content">
                  <NavLink to={"about"} className="s__nav__item">
                    ABOUT
                  </NavLink>
                  {location.pathname == "/" ? (
                    <NavLink className="s__nav__item" to={"signin"}>
                      PLANS
                    </NavLink>
                  ) : null}
                  <NavLink className="s__nav__item">
                    BLOG
                  </NavLink>
                  <NavLink className="s__nav__item" to={"testimonials"}>
                    TESTIMONIALS
                  </NavLink>
                  <NavLink className="s__nav__item" to={"faqs"}>
                    FAQS
                  </NavLink>
                  <div className="lp__auth__item">
                    <div
                      onClick={() => navigate("/signin")}
                      className="lp__nav__signin"
                    >
                      SIGN IN
                    </div>
                    <div
                      onClick={() => navigate("/signup")}
                      className="lp__nav__signup"
                    >
                      SIGN UP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="nav__content">
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="lp__nav__logo"
              >
                <img src={logo} alt="" />
              </div>
              <div className="nav__left">
                <NavLink to={"about"} className="nav__item">
                  ABOUT
                </NavLink>
                {location.pathname == "/" ? (
                  <NavLink className="nav__item" to={"signin"}>
                    PLANS
                  </NavLink>
                ) : null}
                <NavLink className="nav__item">
                  BLOG
                </NavLink>
                <NavLink className="nav__item" to={"testimonials"}>
                  TESTIMONIALS
                </NavLink>
                <NavLink className="nav__item" to={"faqs"}>
                  FAQS
                </NavLink>
                <div className="lp__auth__item1">
                  <div
                    onClick={() => navigate("/signin")}
                    className="lp__nav__signin"
                  >
                    SIGN IN
                  </div>
                  <div
                    onClick={() => navigate("/signup")}
                    className="lp__nav__signup"
                  >
                    SIGN UP
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </Media>
    </div>
  );
};

export default Navbar;
