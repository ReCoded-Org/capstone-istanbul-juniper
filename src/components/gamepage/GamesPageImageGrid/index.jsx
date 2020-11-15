import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import "./index.css";
import { Link } from "react-router-dom";
import zelda from "../../../images/mockZeldaPoster.jpg";
import gta from "../../../images/mockGTAPoster.jpg";
import destiny from "../../../images/mockDestinyPoster.jpg";

const mockDataArr = [
  { name: "Grand theft auto", img: { src: gta, alt: "Grand theft auto" } },
  { name: "Zelda", img: { src: zelda, alt: "Zelda" } },
  { name: "Destiny", img: { src: destiny, alt: "Destiny" } },
  { name: "Grand theft auto", img: { src: gta, alt: "Grand theft auto" } },
];

const GamesPageImageGrid = () => {
  const [t] = useTranslation();
  const gameGridTitle = t("gamesPage.title");
  const gamePosters = mockDataArr.map((gameObj) => {
    return (
      <Col
        xs={20}
        md={9}
        style={{ backgroundImage: `url(${gameObj.img.src})` }}
        className="gamePageImageGrid__col"
      >
        <Link to="/" className="gamePageImageGrid__col__link">
          <p className="gamePageImageGrid__col__link__text">{gameObj.name}</p>
        </Link>
      </Col>
    );
  });
  return (
    <div className="gamePageImageGrid">
      <h1 className="gamePageImageGrid__title">{gameGridTitle}</h1>
      <Row justify="center">{gamePosters}</Row>
    </div>
  );
};

export default GamesPageImageGrid;
