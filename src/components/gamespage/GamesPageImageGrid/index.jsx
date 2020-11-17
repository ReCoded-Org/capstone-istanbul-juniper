import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import "./index.css";
import { Link } from "react-router-dom";
import zeldaImg from "../../../images/mockZeldaPoster.jpg";
import grandTheftAutoImg from "../../../images/mockGTAPoster.jpg";
import destinyImg from "../../../images/mockDestinyPoster.jpg";

const MOCK_GAME_POSTER_DATA_ARR = [
  {
    name: "Grand Theft Auto  ",
    img: { src: grandTheftAutoImg, alt: "Grand Theft Auto" },
  },
  { name: "Zelda", img: { src: zeldaImg, alt: "Zelda" } },
  { name: "Destiny", img: { src: destinyImg, alt: "Destiny" } },
];

const GamesPageImageGrid = () => {
  const [t] = useTranslation();
  const gamePosters = MOCK_GAME_POSTER_DATA_ARR.map((gameObj) => {
    return (
      <Col
        xs={20}
        md={9}
        style={{ backgroundImage: `url(${gameObj.img.src})` }}
        className="gamePageImageGrid__col"
        key={gameObj.name}
      >
        <Link to="/" className="gamePageImageGrid__col__redirect">
          <p className="gamePageImageGrid__col__redirect__text">
            {gameObj.name}
          </p>
        </Link>
      </Col>
    );
  });
  return (
    <div className="gamePageImageGrid">
      <h1 className="gamePageImageGrid__title">{t("gamesPage.title")}</h1>
      <Row justify="center">{gamePosters}</Row>
    </div>
  );
};

export default GamesPageImageGrid;
