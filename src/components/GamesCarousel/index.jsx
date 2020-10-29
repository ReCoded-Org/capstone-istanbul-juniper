import React from "react";
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
// import i18n from './../../i18n';

const gameCards = [
  {
    name: "",
    img: "",
    description: "",
  },
  {
    name: "",
    img: "",
    description: "",
  },
  {
    name: "",
    img: "",
    description: "",
  },
  {
    name: "",
    img: "",
    description: "",
  },
  {
    name: "",
    img: "",
    description: "",
  },
  {
    name: "",
    img: "",
    description: "",
  },
];

//React-Slider Settings
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
  const {t} = useTranslation()
  console.log(useTranslation().t('navbar'));
  return (
    <div>
      <h2 className="gamesCarousel_title">{t("gamesCarousel.title")}</h2>
      <p className="gamesCarousel_context">{t("gamesCarousel.subtitle")}</p>
      <div className="sliderContainer">
        <Slider {...settings} className="game-carousels">
          {gameCards.map((game) => (
            <div className="game-carousel">{game.name}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GamesCarousel;
