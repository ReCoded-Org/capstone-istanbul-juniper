import React from "react";
import { Col } from "antd";
import FlippableCard from "../MemoryGameFlippableCard";
import SuccessCard from "../MemoryGameSuccessCard";
import "./index.css";

// cardStates is an array of objects(states)
// cardStates example :
// [
//   {
//      cardKey:"",
//      img:{src:"",imgKey:""},
//      isFlipped:false,
//      isMatched:false,
//      description:"",
//      link:"",
//      phrase:""
//   },
// ...]
// selectedCards is an array of clicked card states(objects).
// selectedCards array hold only "NUM_REQUIRED_MATCHES" amount of card states
// example of selectedCards is same as example above(line 9-19)
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
          // if there is no match FlippableCard gets rendered with 2 children inside.
          // Children are front side and back side in this order
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
