import React from "react";
import { Col } from "antd";
import FlippableCard from "../MemoryGameFlippableCard";
import SuccessCard from "../MemoryGameSuccessCard";
import "./index.css";

const GameCards = ({
  // An array of state objects. To see an example of cardStates check MemoryGameBoard/index.jsx
  cardStates,
  setCardStates,
  // An array of clicked card state objects.
  setSelectedCards,
  selectedCards,
}) => {
  return (
    <>
      {cardStates.map((cardState) => {
        let card;
        if (cardState.isMatched) {
          // an unclickable card with a success symbol on it
          card = <SuccessCard />;
        } else {
          card = (
            <FlippableCard
              targetState={cardState}
              cardStates={cardStates}
              setCardStates={setCardStates}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          );
        }
        return (
          <Col xs={8} lg={6} xl={3} key={cardState.cardKey}>
            {card}
          </Col>
        );
      })}
    </>
  );
};

export default GameCards;
