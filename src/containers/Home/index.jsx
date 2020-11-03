import React from "react";
import Navbar from "../../components/Navbar/index";
import HomePageHeaderSection from "../../components/HomePageHeaderSection";
import StayUpToDate from "../../components/StayUpTodate";
import BottomCurve from "../../components/BottomCurve/index";
import SpreadTheWordButton from "../../components/SpreadTheWordButton";
import MemoryGame from "../../components/MemoryGame";
import "./index.css";

const Home = () => {
  return (
    <>
      <MemoryGame />
      {/* <Navbar />
      <HomePageHeaderSection />
      <BottomCurve />
      <SpreadTheWordButton />
      <StayUpToDate /> */}
    </>
  );
};

export default Home;
