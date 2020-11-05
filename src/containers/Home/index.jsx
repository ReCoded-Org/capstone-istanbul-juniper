import React from "react";
import Navbar from "../../components/Navbar/index";
import HomePageHeaderSection from "../../components/HomePageHeaderSection";
import StayUpToDate from "../../components/StayUpTodate";
import BottomCurve from "../../components/BottomCurve/index";
import SpreadTheWordButton from "../../components/SpreadTheWordButton";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomePageHeaderSection />
      <BottomCurve />
      <SpreadTheWordButton />
      <StayUpToDate />
    </>
  );
};

export default Home;
