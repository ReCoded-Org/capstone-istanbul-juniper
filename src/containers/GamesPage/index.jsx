import React from "react";
import ProgressSection from "../../components/gamespage/GamesPageProgressSection";
import GamesPageImageGrid from "../../components/gamespage/GamesPageImageGrid";
import BottomCurve from "../../components/BottomCurve";

const GamesPage = () => {
  return (
    <>
      <ProgressSection />
      <BottomCurve />
      <GamesPageImageGrid />
    </>
  );
};

export default GamesPage;
