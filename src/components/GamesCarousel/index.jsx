import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import {settings} from "./settings.jsx"


const GamesCarousel = () => {
  const [t] = useTranslation();
  return (
    <div>
      <h2 className="gamesCarousel__title">{t('home.gamesCarousel.title')}</h2>
      <p className="gamesCarousel__context">{t('home.gamesCarousel.subtitle')}</p>
      <div className="sliderContainer">
        <Slider {...settings} className="gameCarousels">
          {t('home.gamesCarousel.gameCards', { returnObjects: true }).map((game) => (
            <div className="gameCarousel">{game.name}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GamesCarousel;
