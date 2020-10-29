import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

//React-Slider customised settings

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: true,
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
