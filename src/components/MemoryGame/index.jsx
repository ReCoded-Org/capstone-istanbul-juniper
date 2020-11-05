import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Modal, Typography } from "antd";
import Confetti from "react-dom-confetti";
import { Redirect } from "react-router-dom";
import MemoryGameFactList from "../MemoryGameFactList/index";
import "./index.css";
import confettiConfig from "../confettiConfig";
import cardBackSides from "../cardBacksides";
import shuffle from "../shuffle";
import MemoryGameCards from "../MemoryGameCards";

const Cards = ({ cardStates }) => {
  const [t] = useTranslation();
  const cardsData = [
    ...t("memoryGame.cards", {
      returnObjects: true,
    }),
  ];
  const CardBackSidesArr = cardBackSides(cardsData);
  const [coupledCardsArr, setCoupledCardsArr] = useState([
    ...CardBackSidesArr,
    ...CardBackSidesArr,
  ]);

  useEffect(() => {
    const shuffledCards = shuffle(coupledCardsArr);
    setCoupledCardsArr(shuffledCards);
  }, []);

  const [matchedCardIndexes, setMatchedCardIndexes] = useState([]);
  const refArr = [];
  const [matchedCards, setMatchedCards] = useState([]);
  const [completed, setCompleted] = useState(false);

  // makes complete icon visible for both matches
  useEffect(() => {
    matchedCardIndexes.forEach((matchedIndex) => {
      const card = refArr[matchedIndex].current.children[1];
      const completeIcon = refArr[matchedIndex].current.children[0];
      completeIcon.style.display = "inline-block";
      card.style.display = "none";
    });
  }, [matchedCardIndexes]);

  useEffect(() => {
    // matchedCardIndexes stores indexes of both matches.
    // Use of both indexes eventually leads to same objects.
    // So, it doesn't matter if index 1 or 0 used
    const matchedCardIndex = matchedCardIndexes[1];
    if (matchedCardIndex) {
      const newMatch = cardsData.find(
        (data) => data.description === coupledCardsArr[matchedCardIndex].key
      );
      setMatchedCards([...matchedCards, newMatch]);
    }
  }, [matchedCardIndexes]);

  const [redirect, setRedirect] = useState();

  useEffect(() => {
    const maxNumFacts = CardBackSidesArr.length;
    if (matchedCards.length === maxNumFacts) {
      setCompleted(true);
      Modal.success({
        content: "You have completed the game!",
        onOk: () => setRedirect(true),
      });
    }
  }, [matchedCards]);
  //
  return redirect ? (
    <>
      <Redirect to="/" />
    </>
  ) : (
    <Row>
      <Confetti active={completed} config={confettiConfig} />
      <Col span={16} offset={2}>
        <h1 className="memoryGameTitle">Match Images</h1>
        <Row justify="center">
          <MemoryGameCards
            setMatchedCardIndexes={setMatchedCardIndexes}
            cardStates={cardStates}
            refArr={refArr}
            coupledCardsArr={coupledCardsArr}
          />
        </Row>
      </Col>
      <Col span={2} offset={2}>
        <Confetti active={completed} config={confettiConfig} />
        <MemoryGameFactList facts={matchedCards} />
      </Col>
    </Row>
  );
};

export default Cards;
