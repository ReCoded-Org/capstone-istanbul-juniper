import React, { useState } from "react";
import "./index.css";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
// Check https://github.com/daniel-lundin/react-dom-confetti for 'react-dom-confetti'
import Confetti from "react-dom-confetti";
import confettiConfig from "../confettiConfig";
import MemoryGameFactList from "../MemoryGameFactList/index";
import MemoryGameBoard from "../MemoryGameBoard";

const MemoryGame = () => {
  const [t] = useTranslation();
  // from line 13 to 17 all const are string translations
  const factsTitle = t("memoryGame.facts");
  const emptyFactListMessage = t("memoryGame.emptyFactListMessage");
  const gameTitle = t("memoryGame.title");
  const gameHeader = t("memoryGame.header");
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  // matchedCards is being used to display environmental facts.
  // It is an array of object(states).Each object is a successfully matched card state.
  // When a match is made only state of first card gets pushed inside matchedCards.
  // Because matched cards have same state. Otherwise same fact would be displayed twice.
  const [matchedCards, setMatchedCards] = useState([]);

  return (
    <Row justify="center">
      {/* Confetti displays confetti effect to congratulate user when game is completed */}
      <Confetti active={isGameCompleted} config={confettiConfig} />
      <Col xs={22} md={20} xl={17}>
        <h1 className="memoryGameTitle">{gameTitle}</h1>
        <h3 className="memoryGameDescription">{gameHeader}</h3>
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
        <MemoryGameFactList
          facts={matchedCards}
          title={factsTitle}
          emptyFactListMessage={emptyFactListMessage}
        />
      </Col>
    </Row>
  );
};

export default MemoryGame;
