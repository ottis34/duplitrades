import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import NavUser from "./components/NavUser/NavUser";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import Market from "./components/Dashboard/Main/Market";
import NewsPage from "./components/Dashboard/Main/News";
import UserFooter from "./components/Footer/UserFooter";
import { useContext, useEffect, useState } from "react";
import Widget from "./components/Dashboard/Widget/Widget";
import Calc from "./components/Dashboard/Main/Calc";
import Home from "./pages/LandingPage/Home";
import About from "./pages/About/About";
import HomeContent from "./pages/LandingPage/HomeContent";
import Blog from "./pages/Blog/Blog";
import Testimonials from "./pages/Testimonials/Testimonials";
import Faqs from "./pages/Faqs/Faqs";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";

import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { UserContext } from "./context/UserContext";
import { useCookies } from "react-cookie";
import Rotate from "./components/Rotate/Rotate";
import Terms from "./components/Terms/Terms";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  const { getUser, widName } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  console.log("width", width);

  useEffect(() => {
    const checkAuth = async () => {
      if (cookies) {
        if (cookies?.userToken) {
          setLoading(true);
          await getUser();
        }
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [cookies]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [pop, setPop] = useState(false);
  const [a1, setA1] = useState(false);
  const [n1, setN1] = useState(false);
  const [r1, setR1] = useState(false);
  const [c1, setC1] = useState(false);
  const [isWidget, setIsWidget] = useState(false);

  const handleWidget = () => {
    setIsWidget(!isWidget);
  };

  const closePop = () => {
    setPop(false);
  };
  const openPop = () => {
    setPop(true);
  };

  return (
    <>
      {!loading ? (
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />

          <Route path="/" element={<Home />}>
            <Route path="/" element={<HomeContent />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="terms" element={<Terms />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="*" element={<Signin />} />
          </Route>
        </Routes>
      ) : (
        <>
          {width > 600 ? (
            <div className="userAuth">
              <NavUser
                openPop={openPop}
                pop={pop}
                setA1={setA1}
                setN1={setN1}
                n1={n1}
                a1={a1}
                c1={c1}
                r1={r1}
                setC1={setC1}
                setR1={setR1}
                closePop={closePop}
              />
              <div className="dash_body">
                <div
                  className="dash__con"
                  onClick={() => {
                    closePop();
                    setA1(false);
                    setN1(false);
                    setC1(false);
                    setR1(false);
                  }}
                >
                  <aside className="dash__side">
                    <Sidebar handleWidget={handleWidget} />
                  </aside>

                  {isWidget ? (
                    <div
                      className={`${
                        isWidget
                          ? "dash__widget dash__mobile__widget"
                          : "notWidget"
                      }`}
                    >
                      <div
                        className={`${
                          isWidget ? "dash__widget__right" : "notWidget"
                        }`}
                      >
                        <Widget widName={widName} isWidget={isWidget} />
                      </div>
                      <div className="dash__widget__left">
                        <div
                          className="dash__widget__left__icon"
                          onClick={() => setIsWidget(false)}
                        >
                          <MdOutlineKeyboardDoubleArrowLeft size={15} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        height: "100%",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div
                          className="dash__widget__left__icon"
                          onClick={() => setIsWidget(true)}
                        >
                          <MdOutlineKeyboardDoubleArrowRight size={15} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div
                    className={`${
                      isWidget ? "dash__rest" : "dash__rest__full"
                    }`}
                  >
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/orderbook" element={<Calc />} />
                      <Route path="/market" element={<Market />} />
                      <Route path="/calc" element={<Calc />} />
                      <Route path="/news" element={<NewsPage />} />
                      <Route path="*" element={<Calc />} />
                    </Routes>
                  </div>
                </div>
              </div>
              <UserFooter
                closePop={closePop}
                setA1={setA1}
                setN1={setN1}
                setR1={setR1}
                setC1={setC1}
              />
            </div>
          ) : (
            <Rotate />
          )}
        </>
      )}
    </>
  );
}

export default App;
