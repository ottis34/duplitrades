import { useEffect, useState } from "react";
import "./UserFooter.css";

const UserFooter = ({ closePop, setA1, setN1, setR1, setC1 }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return (
    <div
      className="user__footer"
      onClick={() => {
        closePop();
        setA1(false);
        setN1(false);
        setR1(false);
        setC1(false);
      }}
    >
      <div className="user__footer__theme"></div>
      <div className="user__footer__time">
        <div className="user__footer__text">Contact us</div>
        <div className="user__footer__text">{formattedTime}</div>
      </div>
    </div>
  );
};

export default UserFooter;
