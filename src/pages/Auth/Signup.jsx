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

const images = [img2, img3, img4];
const colors = ["#00C49F", "#00C49F", "#00C49F"];

const Signup = () => {
  // use context
  const delay = 2500;
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [error, setError] = useState("");
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
    if (values.cpassword == values.password) {
      await axios
        .post(
          "https://duplitrades-server.onrender.com/pent/auth/signup/",
          {
            name: values.name,
            password: values.password,
            email: values.email.toLowerCase(),
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          setLoad(false);
          console.log(res);
          window.location.href = "/signin";
        })
        .catch((err) => {
          setLoad(false);
          if (err.response.data.msg == "User already exist!") {
            setError("User already exist!");
            // alert(err.response.data.msg);
          } else {
            setError("An error occured");
          }
        });
    } else {
      alert("Password does not match");
    }
    console.log("Form data", values);
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
                        type="text"
                        label="Name"
                        name="name"
                        placeholder="Your name"
                      />
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
                      <FormikControl
                        control="input"
                        type="password"
                        label="Password"
                        name="cpassword"
                        placeholder="Repeat your password"
                      />
                      {error && (
                        <>
                          <g style={{ color: "red", marginBottom: "-20px" }}>
                            {error}
                            <br />
                            <br />
                          </g>
                        </>
                      )}

                      <div className="auth__action">
                        <div className="checkbox">
                          <input required type="checkbox" />
                          <p>
                            I agree with the <a href="">terms of services</a>{" "}
                          </p>
                        </div>
                        <div className="signup__div1">
                          <br />
                          <br /> <br />
                          <a onClick={() => navigate("/signin")}>
                            Back to login
                          </a>
                          <button
                            className="signup__button1"
                            type="submit"
                            disabled={!formik.isValid}
                          >
                            {load ? (
                              <div class="spinner"></div>
                            ) : (
                              <span>LET'S GO !</span>
                            )}
                          </button>
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

export default Signup;
