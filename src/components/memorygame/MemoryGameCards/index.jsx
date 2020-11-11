import React, { useState, useEffect } from "react";
import "./index.css";
import ReactCardFlip from "react-card-flip";
import { Col, Card, Modal } from "antd";
import { useTranslation } from "react-i18next";
import questionMark from "../../../images/memoryGameFrontImage.png";
import memoryGameSuccessSymbol from "../../../images/memoryGameSuccessSymbol.svg";
import cardInitialStateGenerator from "../cardInitialStateGenerator";

const NUM_REQUIRED_MATCHES = 2;
// game example: https://www.brightfocus.org/alzheimers/memory-games/match-pictures
// instead of squares this game uses cards.
// Card flips on click to show what is behind.
// matchedCards is an array states that holds successfully matched card states
// setCompleted is true when all possible matches made
const MemoryGameCards = ({ setMatchedCards, matchedCards, setCompleted }) => {
  const [t] = useTranslation();
  // cardsDataArr example [{description:"...",link:"...",phrase:".."},...]
  const cardsDataArr = [
    ...t("memoryGame.cards", {
      returnObjects: true,
    }),
  ];
  // cardStates is an array of states with multiple properties
  // state example :
  // {cardKey:"",img:{src:"",imgKey:""},
  // isFlipped:false,isMatched:false,description:"",link:"",phrase:""}
  const [cardStates, setCardStates] = useState(
    cardInitialStateGenerator(cardsDataArr, NUM_REQUIRED_MATCHES)
  );
  // selectedCards is an array of clicked card states(objects).
  // selectedCards array hold only "NUM_REQUIRED_MATCHES" amount of card states
  const [selectedCards, setSelectedCards] = useState([]);

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

  // Checks if two cards have a matching image.
  const areCardsMatching = (card, firstCard) => {
    return card.img.imgKey === firstCard.img.imgKey;
  };

  // manipulates isFlipped and isMatched property of card state
  const changeCardStatePropertyToOpposite = (property, targetCard) => {
    const copyOfCardStates = [...cardStates];
    const targetIndex = copyOfCardStates.findIndex(
      (cardState) => cardState.cardKey === targetCard.cardKey
    );
    const targetCardState = copyOfCardStates[targetIndex];
    // isMatched is false as default. When it is true success symbol appears in card
    if (property === "isMatched") {
      targetCardState.isMatched = !targetCardState.isMatched;
      setCardStates(() => [...copyOfCardStates]);
      // matchedCards hold successfuly matched card states and uses them to display facts
      // to prevent fact duplication only 1 of the matched cards should be passed into matchedCards
      setMatchedCards((prevState) => [...prevState, selectedCards[0]]);
      // isFlipped is false as default. When it is true backside of card become visible
    } else if (property === "isFlipped") {
      targetCardState.isFlipped = !targetCardState.isFlipped;
      setCardStates(() => [...copyOfCardStates]);
    }
    // if one of the 2 conditions above achieved, an empty selectedCards should be used to start over again
    setSelectedCards([]);
  };

  // Triggered when user clicks on a card(selectedCards change)
  // checks selected cards to see if they are a match
  useEffect(() => {
    // prevents any action to be taken if there isn't enough clicked card
    if (selectedCards.length !== NUM_REQUIRED_MATCHES) {
      return;
    }
    const isMatched = selectedCards.every((card) => {
      return areCardsMatching(card, selectedCards[0]);
    });
    if (isMatched) {
      selectedCards.forEach((matchedCard) => {
        changeCardStatePropertyToOpposite("isMatched", matchedCard);
      });
    } else {
      selectedCards.forEach((unmatchedCard) => {
        changeCardStatePropertyToOpposite("isFlipped", unmatchedCard);
      });
    }
  }, [selectedCards]);

  // displays a modal when victory condition achieved
  useEffect(() => {
    if (matchedCards.length === cardStates.length) {
      setCompleted(true);
      Modal.success({
        content: "You have completed the game!",
      });
    }
  }, [matchedCards]);

  const successCardBody = (
    <Card className="successCard">
      <img
        src={memoryGameSuccessSymbol}
        alt="Success symbol"
        className="successCard___symbol"
      />
    </Card>
  );

  const gameCards = cardStates.map((cardState) => {
    let cardBody;
    if (cardState.isMatched) {
      cardBody = successCardBody;
    } else {
      cardBody = (
        <ReactCardFlip isFlipped={cardState.isFlipped} flipDirection="vertical">
          <Card
            className="memoryGameCard"
            onClick={() => handleClick(cardState)}
          >
            <img
              src={questionMark}
              alt="Green question mark"
              className="memoryGameCard___questionMark"
            />
          </Card>
          <Card className="memoryGameCard">
            <img
              src={cardState.img.src}
              alt={cardState.description}
              className="memoryGameCard___image"
            />
            <figcaption>{cardState.description}</figcaption>
          </Card>
        </ReactCardFlip>
      );
    }
    return (
      <Col lg={4} key={cardState.cardKey}>
        {cardBody}
      </Col>
    );
  });

  return gameCards;
};

export default MemoryGameCards;
