import React, { useState, useEffect } from "react";
import "./index.css";
import { Col, Modal, Row, Popover, Button } from "antd";
import { useTranslation } from "react-i18next";
import { QuestionCircleTwoTone } from "@ant-design/icons";
// Check https://github.com/rafgraph/react-router-hash-link for 'react-router-hash-link'
import { HashLink } from "react-router-hash-link";
import cardInitialStateGenerator from "../cardInitialStateGenerator";
import FlippableCard from "../MemoryGameFlippableCard";
import SuccessCard from "../MemoryGameSuccessCard";

const NUM_REQUIRED_MATCHES = 2;
// game example: https://www.brightfocus.org/alzheimers/memory-games/match-pictures
// instead of squares this game uses cards.
// Card flips on click to show what is behind.
// matchedCards is an array states that holds successfully matched card states
// setIsCompleted is a function that is being used to set isCompleted as,
// boolean state when all possible matches made.
const MemoryGameCards = ({
  setMatchedCards,
  matchedCards,
  setIsGameCompleted,
}) => {
  const [t] = useTranslation();

  // cardsDataArr example [{description:"...",link:"...",phrase:".."},...]
  const cardsDataArr = [
    ...t("memoryGame.cards", {
      returnObjects: true,
    }),
  ];
  // line 29, 30 and 31 are string translations for screen elements
  const unlockedFacts = t("memoryGame.unlockedFacts");
  const howToPlayTitle = t("memoryGame.howToPlayTitle");
  const howToPlayDescription = t("memoryGame.howToPlayDescription");

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

  // Checks if two cards have a matching image.
  const areCardsMatching = (card, firstCard) => {
    return card.img.imgKey === firstCard.img.imgKey;
  };

  // Triggered when user clicks on a card(selectedCards change)
  // checks selected cards to see if they are a match
  useEffect(() => {
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
        // isFlipped is false as default. When it is true backside of card become visible
      } else if (property === "isFlipped") {
        setTimeout(() => {
          targetCardState.isFlipped = !targetCardState.isFlipped;
          setCardStates(() => [...copyOfCardStates]);
        }, 750);
      } else {
        throw new Error(
          "Invalid property was passed to changeCardStatePropertyToOpposite"
        );
      }
    };

    // prevents any action to be taken if there isn't enough clicked card
    if (selectedCards.length !== NUM_REQUIRED_MATCHES) {
      return;
    }
    const isMatched = selectedCards.every((card) => {
      return areCardsMatching(card, ...selectedCards);
    });
    if (isMatched) {
      selectedCards.forEach((matchedCard) => {
        changeCardStatePropertyToOpposite("isMatched", matchedCard);
      });
      // matchedCards hold successfuly matched card states and uses them to display facts
      // to prevent fact duplication only 1 matched card should be passed into matchedCards
      setMatchedCards((prevState) => [...prevState, selectedCards[0]]);
    } else {
      selectedCards.forEach((unmatchedCard) => {
        changeCardStatePropertyToOpposite("isFlipped", unmatchedCard);
      });
    }
    setSelectedCards([]);
  }, [selectedCards]);

  // displays a modal when victory condition achieved
  useEffect(() => {
    const MAX_MATCHES = cardStates.length / NUM_REQUIRED_MATCHES;
    if (matchedCards && matchedCards.length === MAX_MATCHES) {
      setIsGameCompleted(true);
      Modal.success({
        content: "You have completed the game!",
      });
    }
  }, [matchedCards, cardStates.length, setIsGameCompleted]);

  const gameCards = cardStates.map((cardState) => {
    let card;
    // if the card is matched, it gets replaced by a card with success symbol on it
    if (cardState.isMatched) {
      card = <SuccessCard />;
      // if there is no match FlippableCard gets rendered with 2 children inside, front side and back side in this order
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
  });

  return (
    <div>
      <Row align="middle" className="scrollToFactsContainer">
        <Col span={5}>
          <HashLink to="#memoryGameFactList" smooth={true}>
            <Button className="scrollToFactsContainer__button" type="primary">
              <p>{unlockedFacts}</p>
            </Button>
          </HashLink>
        </Col>
        <Col span={2} push={17} className="howToPlayMemoryGameContainer">
          <Popover
            content={howToPlayDescription}
            title={howToPlayTitle}
            placement="topRight"
          >
            <QuestionCircleTwoTone className="howToPlayMemoryGameContainer__icon" />
          </Popover>
        </Col>
      </Row>
      <Row className="memoryGameCardContainer">{gameCards}</Row>
    </div>
  );
};

export default MemoryGameCards;
