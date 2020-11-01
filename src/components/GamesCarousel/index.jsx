import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { settings } from "./settings.jsx";

const GamesCarousel = () => {
  const [t] = useTranslation();
  const gameCardsData = [
    ...t("gameCards", {
      returnObjects: true,
    }),
  ];
  return (
    <div className="gamesCarousel">
      <h2 className="gamesCarousel__title">{t("home.gamesCarousel.title")}</h2>
      <p className="gamesCarousel__context">
        {t("home.gamesCarousel.subtitle")}
      </p>
      <div className="gamesCarousel__wrapper">
        <Slider {...settings}>
          {gameCardsData.map((game) => (
            <div className="gamesCarousel__wrapper__card">{game.name}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GamesCarousel;
