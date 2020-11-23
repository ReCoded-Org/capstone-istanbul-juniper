import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { settings } from "./settings.jsx";
import { Link } from "react-router-dom";
import memoryGame from "../../images/gameImages/memoryGame.svg";
import puzzleGame from "../../images/gameImages/puzzleGame.svg";
import quizGame from "../../images/gameImages/quizGame.svg";

// GAME_IMAGES consists of game images local paths as a string format
// imgURLParts is a splits the game image paths from "/" and put each splitted path into an array
// lastImgUrlPart gets last item in the each splitted path's arrays
// imageName gets image name from the lasTImgUrlPart
// gameRoute is lowercased version of imageName, using in routing
const GAME_IMAGES = [memoryGame, puzzleGame, quizGame];

const GamesCarousel = () => {
  const [t] = useTranslation();
  // agreed naming is as follows:
  // image file name: memoryGame
  // game title key in locales: memoryGame.title
  // game route: memorygame
  return (
    <div className="gamesCarousel">
      <h2 className="gamesCarousel__title">{t("home.gamesCarousel.title")}</h2>
      <p className="gamesCarousel__context">
        {t("home.gamesCarousel.subtitle")}
      </p>
      <div className="gamesCarousel__wrapper">
        <Slider {...settings}>
          {GAME_IMAGES.map((imgUrl) => {
            const imgUrlParts = imgUrl.split("/");
            const lastImgUrlPart = imgUrlParts[imgUrlParts.length - 1];
            const imageName = lastImgUrlPart.split(".")[0];
            const gameRoute = imageName.toLowerCase();
            const gameTitle = t(`games.${imageName}.title`);
            return (
              <Link to={`games/${gameRoute}`} key={gameTitle}>
                <div className="gamesCarousel__wrapper__card">
                  <img
                    src={imgUrl}
                    className="gamesCarousel__wrapper__cardImage"
                    alt={gameTitle}
                  />
                  <div className="gamesCarousel__wrapper__cardTitle">
                    <h3>{gameTitle}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default GamesCarousel;
