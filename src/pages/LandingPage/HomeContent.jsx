import React from "react";
import Navbar from "../../components/LandingPage/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Heroarea from "../../components/LandingPage/Heroarea/Heroarea";
import WhyPentax from "../../components/LandingPage/WhyPentax/WhyPentax";
import GetStarted from "../../components/LandingPage/GetStarted/GetStarted";
import Partnership from "../../components/LandingPage/Partnership/Partnership";
import Stories from "../../components/LandingPage/Stories/Stories";
import Transactions from "../../components/LandingPage/Transactions/Transactions";
import Cta from "../../components/LandingPage/Cta/Cta";

const HomeContent = () => {
  return (
    <div>
      <Heroarea />
      <WhyPentax />
      <GetStarted />
      <Partnership />
      <Stories />
      <Transactions />
      <Cta />
    </div>
  );
};

export default HomeContent;
