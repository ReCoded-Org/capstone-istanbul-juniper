import React from 'react';
import { useTranslation } from 'react-i18next';
import GamesPageImageGrid from '../../components/gamespage/GamesPageImageGrid';
import BottomCurve from '../../components/BottomCurve';
import memoryGame from '../../images/gameScreenshots/memoryGame.svg';
import puzzleGame from '../../images/gameScreenshots/puzzleGame.svg';
import quizGame from '../../images/gameScreenshots/quizGame.svg';
import matchingGame from '../../images/gameScreenshots/matchingGame.svg';

const GamesPage = () => {
    const [t] = useTranslation();
    const gameScreenshots = [memoryGame, puzzleGame, matchingGame, quizGame];
    const reducer = (accObj, gameScreenshotDir) => {
        // example /static/media/memoryGame.84fe967a.svg
        const screenshotDirParts = gameScreenshotDir.split('/');
        // example /memoryGame.84fe967a.svg
        const lastScreenshotDirPart =
            screenshotDirParts[screenshotDirParts.length - 1];
        // example memoryGame
        const screenshotName = lastScreenshotDirPart.split('.')[0];
        // example memorygame
        const gameRoute = screenshotName.toLowerCase();
        accObj[screenshotName] = {
            route: gameRoute,
            imgSrc: gameScreenshotDir,
            gameTitle: t(`games.${screenshotName}.title`),
        };
        return accObj;
    };
    const gamePostersObj = gameScreenshots.reduce(reducer, {});
    console.log(gamePostersObj);
    return (
        <>
            <BottomCurve />
            <GamesPageImageGrid gameData={gamePostersObj} />
        </>
    );
};

export default GamesPage;
