import React, { useState } from "react";
import { Col, Row } from "antd";
import Confetti from "react-dom-confetti";
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MemoryGameFactList from "../MemoryGameFactList/index";
import "./index.css";
import confettiConfig from "../confettiConfig";
import MemoryGameCards from "../MemoryGameCards";

const MemoryGame = () => {
  const [t] = useTranslation();
  const factsTitle = t("memoryGame.facts");
  const gameTitle = t("memoryGame.title");
  const [completed, setCompleted] = useState(false);
  const [redirect] = useState();
  const [matchedCards, setMatchedCards] = useState([]);

  return redirect ? (
    <>
      <Redirect to="/" />
    </>
  ) : (
    <Row className="memoryGame" justify="space-around">
      <Confetti active={completed} config={confettiConfig} />
      <Col xs={22} md={20} xl={17}>
        <h1 className="memoryGame__title">{gameTitle}</h1>
        <Row justify="center">
          <MemoryGameCards
            setMatchedCards={setMatchedCards}
            matchedCards={matchedCards}
            setCompleted={setCompleted}
          />
        </Row>
      </Col>
      {matchedCards ? (
        <Col xs={20}>
          <Confetti active={completed} config={confettiConfig} />
          <MemoryGameFactList facts={matchedCards} title={factsTitle} />
        </Col>
      ) : (
        ""
      )}
    </Row>
  );
};

export default MemoryGame;
