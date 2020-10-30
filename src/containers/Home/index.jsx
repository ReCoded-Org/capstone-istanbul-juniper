import React from "react";
import BottomCurve from "../../components/BottomCurve/index";
import "./index.css";
import GamesCarousel from "../../components/GamesCarousel";

const Home = () => {
  return (
    <>
      <GamesCarousel />
      <BottomCurve />
    </>
  );
};

export default Home;
