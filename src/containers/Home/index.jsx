import React from "react";
import Navbar from "../../components/Navbar/index";
import StayUpToDate from "../../components/StayUpTodate";
import BottomCurve from "../../components/BottomCurve/index";
import SpreadTheWordButton from "../../components/SpreadTheWordButton";
import "./index.css";
import {} from "antd";

const Home = () => {
  return (
    <>
      <Navbar />
      <BottomCurve />
      <SpreadTheWordButton />
      <StayUpToDate />
    </>
  );
};

export default Home;
