import React from "react";
import GamesPageImageGrid from "../../components/gamespage/GamesPageImageGrid";
import BottomCurve from "../../components/BottomCurve";

const GamesPage = () => {
  const gameData = {
    imgSrc: "testUrl",
    route: "testRoute",
    gameTitle: "testTitle",
  };
  return (
    <>
      <BottomCurve />
      <GamesPageImageGrid gameData={gameData} />
    </>
  );
};

export default GamesPage;
