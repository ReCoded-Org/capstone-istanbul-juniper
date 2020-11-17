import React, { useState } from "react";
import "./index.css";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import Confetti from "react-dom-confetti";
import confettiConfig from "../../components/memorygame/confettiConfig";
import MemoryGameFactList from "../../components/memorygame/MemoryGameFactList";
import MemoryGameBoard from "../../components/memorygame/MemoryGameBoard";

const MemoryGame = () => {
  const [t] = useTranslation();
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  // finishedCards is being used to display environmental facts.
  // It is an array of object(states).Each object is a successfully matched card state.
  // When a match is made successfully only state of first card gets pushed inside finishedCards.
  // Because matched cards have same state. Otherwise same fact would be displayed twice.
  const [finishedCards, setFinishedCards] = useState([]);

  return (
    <Row justify="center" className="memoryGameContainer">
      {/* Confetti displays confetti effect to congratulate user when game is completed */}
      {/* Check https://github.com/daniel-lundin/react-dom-confetti for 'react-dom-confetti' */}
      <Confetti active={isGameCompleted} config={confettiConfig} />
      <Col xs={22} md={20} xl={17}>
        <h1 className="memoryGameContainer__title">
          {t("games.memoryGame.title")}
        </h1>
        <h3 className="memoryGameContainer__description">
          {t("games.memoryGame.header")}
        </h3>
        <Row justify="center">
          <MemoryGameBoard
            setFinishedCards={setFinishedCards}
            finishedCards={finishedCards}
            setIsGameCompleted={setIsGameCompleted}
          />
        </Row>
      </Col>
      <Col xs={20}>
        <Confetti active={isGameCompleted} config={confettiConfig} />
        <MemoryGameFactList facts={finishedCards} />
      </Col>
    </Row>
  );
};

export default MemoryGame;
