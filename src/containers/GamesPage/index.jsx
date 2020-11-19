import React from "react";
import GamesPageImageGrid from "../../components/gamespage/GamesPageImageGrid";
import BottomCurve from "../../components/BottomCurve";

export const gameData = {
  testGame: {
    imgSrc: "testUrl",
    route: "testRoute",
    gameTitle: "testTitle",
  },
};

const GamesPage = () => {
  return (
    <>
      <BottomCurve />
      <GamesPageImageGrid gameData={gameData} />
    </>
  );
};

export default GamesPage;
