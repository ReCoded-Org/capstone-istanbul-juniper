import React, { useState, useEffect } from "react";
import "./index.css";
import ReactCardFlip from "react-card-flip";
import { Col, Card, Modal } from "antd";
import { useTranslation } from "react-i18next";
import questionMark from "../../../images/memoryGameFrontImage.png";
import memoryGameSuccessSymbol from "../../../images/memoryGameSuccessSymbol.svg";
import cardStateGenerator from "../cardStateGenerator";

const MemoryGameCards = ({
  setMatchedCards,
  matchedCards,
  setCompleted,
  setRedirect,
}) => {
  const [t] = useTranslation();
  const NUM_REQUIRED_MATCHES = 2;
  const cardsDataArr = [
    ...t("memoryGame.cards", {
      returnObjects: true,
    }),
  ];
  const [cardStates, setCardStates] = useState(
    cardStateGenerator(cardsDataArr, NUM_REQUIRED_MATCHES)
  );
  const [selectedCards, setSelectedCards] = useState([]);

  const handleClick = (currentCardState) => {
    const copyOfCardStates = [...cardStates];
    const currentIndex = cardStates.indexOf(currentCardState);
    copyOfCardStates[currentIndex].isFlipped = true;
    setCardStates(() => [...copyOfCardStates]);
    setSelectedCards((prevState) => [...prevState, currentCardState]);
  };

  useEffect(() => {
    if (selectedCards.length === NUM_REQUIRED_MATCHES) {
      const lastNCards = selectedCards.slice(-NUM_REQUIRED_MATCHES);
      const curCard = lastNCards[lastNCards.length - 1];
      const otherCards = lastNCards.filter(
        (card) => lastNCards.indexOf(card) !== lastNCards.indexOf(curCard)
      );
      const matchingClones = otherCards.filter(
        (prevCard) =>
          prevCard.id !== curCard.id &&
          prevCard.description === curCard.description &&
          prevCard.isFlipped &&
          curCard.isFlipped
      );
      const matchArr = [...matchingClones, curCard];
      const copyOfCardStates = [...cardStates];
      if (matchArr.length === NUM_REQUIRED_MATCHES) {
        matchArr.forEach((match) => {
          const targetIndex = copyOfCardStates.indexOf(match);
          copyOfCardStates[targetIndex] = {
            ...copyOfCardStates[targetIndex],
            isMatched: true,
          };
        });
        setMatchedCards((prevState) => [...prevState, ...lastNCards]);
        setCardStates(() => [...copyOfCardStates]);
        setSelectedCards([]);
      } else if (NUM_REQUIRED_MATCHES === selectedCards.length) {
        selectedCards.forEach((card) => {
          const targetIndex = copyOfCardStates.indexOf(card);
          copyOfCardStates[targetIndex] = {
            ...copyOfCardStates[targetIndex],
            isFlipped: false,
          };
        });
        setSelectedCards([]);
        setTimeout(() => {
          setCardStates(() => [...copyOfCardStates]);
        }, 750);
      }
    }
  }, [cardStates]);

  useEffect(() => {
    if (matchedCards.length === cardStates.length) {
      setCompleted(true);
      Modal.success({
        content: "You have completed the game!",
        onOk: () => setRedirect(true),
      });
    }
  }, [matchedCards]);
  return cardStates.map((cardState) => {
    // key is not descriptive but im not using it.
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
                src={cardState.img}
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
