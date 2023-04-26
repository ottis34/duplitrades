import React, { useState, useEffect, useRef, useContext } from "react";
import "./Auth.css";
import img1 from "../../assets/auth/1.jpg";
import img2 from "../../assets/auth/2.jpg";
import img3 from "../../assets/auth/3.jpg";
import img4 from "../../assets/auth/4.jpg";
import en from "../../assets/auth/en.svg";
import { Formik, Form } from "formik";
import logo from "../../assets/landingPage/logo.png";
import FormikControl from "../../components/forms/FormikControl";
import { NavLink, Link, useNavigate, useLocation } from "react-router";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { useCookies } from "react-cookie";

const images = [img2, img3, img4];
const colors = ["#00C49F", "#00C49F", "#00C49F"];

const Signin = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [error, setError] = useState("");

  const delay = 2500;
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [load, setLoad] = useState(false);
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

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    setLoad(true);
    await axios
      .post(
        "https://duplitrades-server.onrender.com/pent/auth/login/",
        {
          password: values.password,
          email: values.email.toLowerCase(),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        // console.log(res);
        setLoad(false);
        setCookie("userToken", res.data.data);
        setCookie("userData", res.data.user);

        window.location.href = "/dashboard";
        console.log(cookies.user.userData);
        // setUser(res.data);
      })
      .catch((err) => {
        setLoad(false);
        if (err.code == "ERR_BAD_REQUEST") {
          console.log(err.code);
          setError("Invalid credentials");
        } else {
          console.log(err);
          // setError("An error occured");
        }
      });

    // console.log("Form data", values);
  };

  const authText = () => {
    if (index === 0) {
      return "10 technical indicators";
    } else if (index === 1) {
      return "Be alerted !";
    } else if (index === 2) {
      return "All news at the same place";
    }
  };

  return (
    <div className="auth__container">
      <div className="auth__content">
        <div className="auth__form__div">
          <div className="auth__form">
            <div className="auth__form__content">
              <img src={logo} alt="" />
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(formik) => {
                  return (
                    <Form className="formik__form">
                      <FormikControl
                        control="input"
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Your e-mail address"
                      />
                      <FormikControl
                        control="input"
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Your password"
                      />

                      <div className="auth__action">
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className="signup__div">
                          <a onClick={() => navigate("/forgotPassword")}>
                            Forgot password ?
                          </a>
                          <button
                            className="signup__button"
                            type="submit"
                            disabled={!formik.isValid}
                          >
                            <span>
                              {load ? <div class="spinner"></div> : "Login"}
                            </span>
                          </button>
                        </div>

                        <div className="auth__or">
                          <hr />
                          <p>or</p>
                          <hr />
                        </div>

                        <div className="signup__text">
                          <a onClick={() => navigate("/signup")}>
                            CREATE A NEW ACCOUNT
                          </a>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="auth__img">
            <div className="slideshow3">
              <div className="slideshowDots3">
                <div className="authImg__text">{authText()}</div>
                <div className="auth__dots">
                  {colors.map((_, idx) => (
                    <>
                      <div
                        key={idx}
                        className={`authslideshowDot${
                          index === idx ? " active" : ""
                        }`}
                        onClick={() => {
                          setIndex(idx);
                        }}
                      ></div>
                    </>
                  ))}
                </div>
              </div>
              <div
                className="slideshowSlider3"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {images.map((image, index) => (
                  <>
                    <div className="slide3" key={index}>
                      <img src={image} alt="Image" className="authImg" />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="auth__info">
          <div className="auth__country">
            <img src={en} alt="" />
            <p>English</p>
          </div>
          <div className="auth__terms">
            <p>TERMS OF SERVICE</p>
            <p>PRIVACY POLICY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
