import React from "react";
// check https://github.com/AaronCCWong/react-card-flip for 'react-card-flip' details
import ReactCardFlip from "react-card-flip";
import { Card } from "antd";
import questionMark from "../../../images/memoryGameFrontImage.png";
import "./index.css";

// targetState example
// {
//   cardKey: "alternateEnergy0",
//   description: "Alternatif Enerji",
//   img: {src: "/static/media/alternateEnergy.88cef00e.svg", imgKey: "alternateEnergy"},
//   isFlipped: false,
//   isMatched: false,
//   link: "https://lorem.com",
//   phrase: "Lorem ipsum"
// }
// FlippableCard is being used in a map function. So targetState refers to each iteration of map
// Mapped array is cardStates. it holds states like example above(line 9-17)
// selectedCards is an array of clicked card states(objects).
// selectedCards array hold only "NUM_REQUIRED_MATCHES" amount of card states
// example of selectedCards is same as example above(line 9-17)

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
    const currentIndex = cardStates.findIndex(
      (state) => state.cardKey === clickedCardState.cardKey
    );
    const targetCardState = copyOfCardStates[currentIndex];
    targetCardState.isFlipped = true;
    setCardStates(() => [...copyOfCardStates]);
    // prevents user to use same card multiple times
    const isCardNotInSelectedCards = selectedCards.every(
      (selectedCard) => selectedCard.cardKey !== clickedCardState.cardKey
    );
    if (isCardNotInSelectedCards) {
      setSelectedCards((prevState) => [...prevState, clickedCardState]);
    }
  };
  return (
    // ReactCardFlip requires 2 children(front side and back side) and isFlipped value to work
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
      <Card className="memoryGameCardsContainer___card">
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
