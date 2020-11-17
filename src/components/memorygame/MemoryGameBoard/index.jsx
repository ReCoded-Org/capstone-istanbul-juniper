import React, { useState, useEffect } from "react";
import "./index.css";
import { Col, Modal, Row } from "antd";
import { useTranslation } from "react-i18next";
import invariant from "invariant";
import cardInitialStateGenerator from "../cardInitialStateGenerator";
import { invertCardStateForKey } from "../gameHelpers";
import ScrollToFacts from "../MemoryGameScrollToFacts";
import QuestionMarkIcon from "../MemoryGameQuestionMarkIcon";
import GameCards from "../MemoryGameCards";

const NUM_REQUIRED_MATCHES = 2;
// game example: https://www.brightfocus.org/alzheimers/memory-games/match-pictures
// instead of squares this game uses cards.
// Card flips on click to show what is behind.
// matchedCards is an array states that holds successfully matched card states
// setMatchedCards is setter of matchedCards
// setIsGameCompleted is a function that is being used to set isGameCompleted as,
// boolean(true) state when all possible matches made.
const MemoryGameBoard = ({
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
  // cardStates is an array of states with multiple properties
  // state example :
  // {
  //    cardKey:"",
  //    img:{src:"",imgKey:""},
  //    isFlipped:false,
  //    isMatched:false,
  //    description:"",
  //    link:"",
  //    phrase:""
  // }
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
    invariant(
      selectedCards.length <= NUM_REQUIRED_MATCHES,
      "SelectedCards.length can't be more than NUM_REQUIRED_MATCHES"
    );
    // prevents any action to be taken if there isn't enough clicked card
    if (selectedCards.length !== NUM_REQUIRED_MATCHES) {
      return;
    }
    const isThereMatch = selectedCards.every((card) => {
      return areCardsMatching(card, ...selectedCards);
    });
    if (isThereMatch) {
      // When isThereMatched condition is provided all cards are same.
      // Because selectedCards gets resetted after every successful or unsuccessful match.
      selectedCards.forEach((matchedCard) => {
        // isMatched property of each card state in selectedCard get changed into true
        // this makes success card to appear instead of flippable card
        invertCardStateForKey(
          "isMatched",
          matchedCard,
          cardStates,
          setCardStates
        );
      });
      // matchedCards hold successfuly matched card states and uses them to display facts
      // to prevent fact duplication only 1 matched card should be passed into matchedCards
      setMatchedCards((prevState) => [...prevState, selectedCards[0]]);
    } else {
      selectedCards.forEach((unmatchedCard) => {
        // before this step handleClick made isFlipped property of all selected cards true.
        // since match failed now,
        // isMatched property of each card state in selectedCard get changed into false
        // This makes cards to flip back
        invertCardStateForKey(
          "isFlipped",
          unmatchedCard,
          cardStates,
          setCardStates
        );
      });
    }
    setSelectedCards([]);
  }, [selectedCards]);

  // displays a modal when victory condition achieved
  useEffect(() => {
    const MAX_MATCHES = cardStates.length / NUM_REQUIRED_MATCHES;
    if (matchedCards.length === MAX_MATCHES) {
      setIsGameCompleted(true);
      Modal.success({
        content: "You have completed the game!",
      });
    }
  }, [matchedCards]);

  return (
    <div>
      <Row align="middle" className="howToPlayPopoverAndScrollToFactsRow">
        <Col span={5}>
          <ScrollToFacts />
        </Col>
        <Col span={2} push={17}>
          <QuestionMarkIcon />
        </Col>
      </Row>
      <Row>
        <GameCards
          cardStates={cardStates}
          setCardStates={setCardStates}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
        />
      </Row>
    </div>
  );
};

export default MemoryGameBoard;
