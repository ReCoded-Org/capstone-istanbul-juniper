import React from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "antd";
import questionMark from "../../../images/memoryGameFrontImage.png";
import "./index.css";

// for cardStates example check src/components/memorygame/MemoryGameBoard/index.jsx
// FlippableCard is being used in a map function. So targetState refers to each iteration of map
// Mapped array is cardStates.
// selectedCards is an array of clicked card states(objects).
const FlippableCard = ({
  targetState,
  cardStates,
  setCardStates,
  selectedCards,
  setSelectedCards,
}) => {
  // handle click flips card
  // if the card is not in selectedCards, adds it to selectedCards
  const handleClick = (clickedCardState) => {
    const copyOfCardStates = [...cardStates];
    // current index is needed to keep the order of cards displayed
    // because goal is to make user remember the spots of previous cards
    const clickedCardIndex = cardStates.findIndex(
      (state) => state.cardKey === clickedCardState.cardKey
    );
    const targetCardState = copyOfCardStates[clickedCardIndex];
    targetCardState.isFlipped = true;
    setCardStates(() => [...copyOfCardStates]);
    // prevents user to use same card multiple times
    const isCardInSelectedCards = selectedCards.some(
      (selectedCard) => selectedCard.cardKey === clickedCardState.cardKey
    );
    if (!isCardInSelectedCards) {
      setSelectedCards((prevState) => [...prevState, clickedCardState]);
    }
  };
  return (
    // ReactCardFlip requires 2 children(front side and back side)
    // check https://github.com/AaronCCWong/react-card-flip for 'react-card-flip' details
    <ReactCardFlip isFlipped={targetState.isFlipped}>
      {/* Front side */}
      <Card
        className="memoryGameCardsContainer___card"
        onClick={() => handleClick(targetState)}
      >
        <img
          src={questionMark}
          alt="Green question mark"
          className="memoryGameCardsContainer___card___image"
        />
      </Card>
      {/* Back side */}
      <Card
        className={`memoryGameCardsContainer___card ${
          targetState.isFlipped ? "memoryGameCardsContainer___flippedCard" : ""
        }`}
      >
        <img
          src={targetState.img.src}
          alt={targetState.description}
          className="memoryGameCardsContainer___card___image"
        />
        <figcaption className="memoryGameCardsContainer___card___figcaption">
          {targetState.description}
        </figcaption>
      </Card>
    </ReactCardFlip>
  );
};

export default FlippableCard;
