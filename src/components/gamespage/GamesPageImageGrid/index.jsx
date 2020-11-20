import React from "react";
import { Row, Col, Card } from "antd";
import { useTranslation } from "react-i18next";
import "./index.css";
import { Link } from "react-router-dom";

const GamesPageImageGrid = ({
  // an object. Check containers/GamesPage/index.jsx to see details
  gameData,
}) => {
  const [t] = useTranslation();
  const { Meta } = Card;
  const gamePosters = Object.values(gameData).map((gameObj) => {
    return (
      <Col
        key={gameObj.gameTitle}
        xs={20}
        md={{ span: 12 }}
        className="gamePageImageGrid__col"
      >
        <div className="gamePageImageGrid__col__link">
          <Link to={`games/${gameObj.route}`}>
            <Card
              hoverable
              className="gamePageImageGrid__col__link__card"
              cover={
                <img
                  alt={gameObj.gameTitle}
                  src={gameObj.imgSrc}
                  className="gamePageImageGrid__col__link__card__img"
                />
              }
            >
              <Meta
                title={
                  <h3 className="gamePageImageGrid__col__link__card__title">
                    {gameObj.gameTitle}
                  </h3>
                }
              />
            </Card>
          </Link>
        </div>
      </Col>
    );
  });
  return (
    <div className="gamePageImageGrid">
      <h1 className="gamePageImageGrid__title">{t("gamesPage.title")}</h1>
      <Row>{gamePosters}</Row>
    </div>
  );
};

export default GamesPageImageGrid;
