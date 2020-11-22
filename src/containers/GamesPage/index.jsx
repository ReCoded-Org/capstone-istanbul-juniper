import React from "react";
import { useTranslation } from "react-i18next";
import ProgressSection from "../../components/gamespage/GamesPageProgressSection";
import GamesPageImageGrid from "../../components/gamespage/GamesPageImageGrid";
import BottomCurve from "../../components/BottomCurve";
import memoryGame from "../../images/gameScreenshots/memoryGame.svg";
import puzzleGame from "../../images/gameScreenshots/puzzleGame.svg";
import quizGame from "../../images/gameScreenshots/quizGame.svg";
import matchingGame from "../../images/gameScreenshots/matchingGame.svg";
import worldIcon from "../../images/world.svg";

const GAME_SCREENSHOTS = [memoryGame, puzzleGame, matchingGame, quizGame];

const GamesPage = () => {
  const [t] = useTranslation();
  // agreed naming is as follows:
  // image file name: memoryGame
  // game title key in locales: memoryGame.title
  // game route: memorygame
  const gamePostersObj = {};
  // gameScreenshotDir example: /static/media/memoryGame.84fe967a.svg
  for (const gameScreenshotDir of GAME_SCREENSHOTS) {
    const screenshotDirParts = gameScreenshotDir.split("/");
    // example: memoryGame.84fe967a.svg
    const lastScreenshotDirPart =
      screenshotDirParts[screenshotDirParts.length - 1];
    // example: memoryGame
    const screenshotName = lastScreenshotDirPart.split(".")[0];
    const gameRoute = screenshotName.toLowerCase();
    gamePostersObj[screenshotName] = {
      route: gameRoute,
      imgSrc: gameScreenshotDir,
      // example: Memory game
      gameTitle: t(`games.${screenshotName}.title`),
    };
  }

  const PLACEHOLDER_PROGRESS_DATA = {
    currentLevel: 3,
    currentXP: 40,
    prevRewardIcon: worldIcon,
  };
  return (
    <>
      <ProgressSection progressData={PLACEHOLDER_PROGRESS_DATA} />
      <BottomCurve />
      <GamesPageImageGrid gameData={gamePostersObj} />
    </>
  );
};

export default GamesPage;
