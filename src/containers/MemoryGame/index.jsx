import React, { useState } from "react";
import "./index.css";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
// Check https://github.com/daniel-lundin/react-dom-confetti for 'react-dom-confetti'
import Confetti from "react-dom-confetti";
import confettiConfig from "../../components/memorygame/confettiConfig";
import MemoryGameFactList from "../../components/memorygame/MemoryGameFactList";
import MemoryGameBoard from "../../components/memorygame/MemoryGameBoard";

const MemoryGame = () => {
  const [t] = useTranslation();
  const gameTitle = t("memoryGame.title");
  const gameHeader = t("memoryGame.header");
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  // matchedCards is being used to display environmental facts.
  // It is an array of object(states).Each object is a successfully matched card state.
  // When a match is made only state of first card gets pushed inside matchedCards.
  // Because matched cards have same state. Otherwise same fact would be displayed twice.
  const [matchedCards, setMatchedCards] = useState([]);

  return (
    <Row justify="center" className="memoryGameContainer">
      {/* Confetti displays confetti effect to congratulate user when game is completed */}
      <Confetti active={isGameCompleted} config={confettiConfig} />
      <Col xs={22} md={20} xl={17}>
        <h1 className="memoryGameContainer__title">{gameTitle}</h1>
        <h3 className="memoryGameContainer__description">{gameHeader}</h3>
        <Row justify="center">
          <MemoryGameBoard
            setMatchedCards={setMatchedCards}
            matchedCards={matchedCards}
            setIsGameCompleted={setIsGameCompleted}
          />
        </Row>
      </Col>
      <Col xs={20}>
        <Confetti active={isGameCompleted} config={confettiConfig} />
        <MemoryGameFactList facts={matchedCards} />
      </Col>
    </Row>
  );
};

export default MemoryGame;
