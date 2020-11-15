import React from "react";
import { Col } from "antd";
import FlippableCard from "../MemoryGameFlippableCard";
import SuccessCard from "../MemoryGameSuccessCard";
import "./index.css";

const GameCards = ({
  cardStates,
  setCardStates,
  setSelectedCards,
  selectedCards,
}) => {
  return (
    <>
      {cardStates.map((cardState) => {
        let card;
        // if the card is matched, it gets replaced by a card with success symbol on it
        if (cardState.isMatched) {
          card = <SuccessCard />;
          // if there is no match FlippableCard gets rendered with 2 children inside,
          // front side and back side in this order
        } else {
          card = (
            <FlippableCard
              cardState={cardState}
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
