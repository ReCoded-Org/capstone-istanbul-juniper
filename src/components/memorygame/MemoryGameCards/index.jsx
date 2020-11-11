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
// onClick card flips to show what is behind the card.
// When there is "NUM_REQUIRED_MATCHES" amount of match selected cards turn into success symbol.
// matchedCards is an array states that holds successfully matched card states
// setCompleted is boolean
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
  // state example : {id:"",img:{src:"",imgKey:""},isFlipped:"",isMatched:"",description:"",link:"",phrase:""}
  const [cardStates, setCardStates] = useState(
    cardInitialStateGenerator(cardsDataArr, NUM_REQUIRED_MATCHES)
  );
  // selectedCards is an array of clicked card states(object).
  // selectedCards array hold only "NUM_REQUIRED_MATCHES" amount of card states
  const [selectedCards, setSelectedCards] = useState([]);

  // handle click flips card and adds that card's state to selectedCards
  const handleClick = (clickedCardState) => {
    const copyOfCardStates = [...cardStates];
    // current index is needed to keep the order of cards displayed
    // because goal is to make user remember the spots of previous cards
    const currentIndex = cardStates.findIndex(
      (state) => state.id === clickedCardState.id
    );
    copyOfCardStates[currentIndex].isFlipped = true;
    setCardStates(() => [...copyOfCardStates]);
    setSelectedCards((prevState) => [...prevState, clickedCardState]);
  };

  // matched cards should have different id, same image key, isFlipped:true
  const doesMatchLastCard = (prevCard, lastCardState) => {
    return (
      prevCard.cardKey !== lastCardState.cardKey &&
      prevCard.img.imgKey === lastCardState.img.imgKey &&
      prevCard.isFlipped &&
      lastCardState.isFlipped
    );
  };

  // Triggered when user clicks on a card(selectedCards change)
  // checks selected cards to see if they are a match
  useEffect(() => {
    // only triggered if "NUM_REQUIRED_MATCHES" amount of cards are stored in selectedCards
    if (selectedCards.length === NUM_REQUIRED_MATCHES) {
      // match condition of cards inside selectedCards will be based on card that is added to
      // selectedCards last
      const lastCardState = selectedCards[selectedCards.length - 1];
      const matchesOfLastCardState = selectedCards.filter((prevCard) =>
        doesMatchLastCard(prevCard, lastCardState)
      );
      // matchesOfLastCard doesnt include last card
      const matchedCardsArr = [...matchesOfLastCardState, lastCardState];
      const copyOfCardStates = [...cardStates];

      if (matchedCardsArr.length === NUM_REQUIRED_MATCHES) {
        // sets isMatched property of each state to true
        // if isMatched is true card image gets replaced by success symbol
        matchedCardsArr.forEach((matchedCard) => {
          const targetIndex = copyOfCardStates.findIndex(
            (card) => card.id === matchedCard.id
          );
          copyOfCardStates[targetIndex] = {
            ...copyOfCardStates[targetIndex],
            isMatched: true,
          };
        });
        // to display 1 fact per match, only one of the matched cards(selectedCards[0]) should be passed as state
        setMatchedCards((prevState) => [...prevState, selectedCards[0]]);
        setCardStates(() => [...copyOfCardStates]);
      }
      // if there is no match or not enough matches flipped cards gets closed by setting isFlipped:false
      else if (NUM_REQUIRED_MATCHES === selectedCards.length) {
        selectedCards.forEach((card) => {
          const targetIndex = copyOfCardStates.findIndex(
            (cardState) => cardState.id === card.id
          );
          copyOfCardStates[targetIndex] = {
            ...copyOfCardStates[targetIndex],
            isFlipped: false,
          };
        });
        // this gives user 750ms to see failed match by delaying setting isFlipped to false.
        // Otherwise game gets too punishing
        setTimeout(() => {
          setCardStates(() => [...copyOfCardStates]);
        }, 750);
      }
      setSelectedCards([]);
    }
  }, [selectedCards]);

  // displays a modal when all possible matches made
  useEffect(() => {
    if (matchedCards.length === cardStates.length) {
      setCompleted(true);
      Modal.success({
        content: "You have completed the game!",
      });
    }
  }, [matchedCards]);

  return cardStates.map((cardState) => {
    return (
      <Col lg={4} key={cardState.id}>
        {cardState.isMatched ? (
          <Card className="successCard">
            <img
              src={memoryGameSuccessSymbol}
              alt="Success symbol"
              className="successCard___symbol"
            />
          </Card>
        ) : (
          <ReactCardFlip
            isFlipped={cardState.isFlipped}
            flipDirection="vertical"
          >
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
        )}
      </Col>
    );
  });
};

export default MemoryGameCards;
