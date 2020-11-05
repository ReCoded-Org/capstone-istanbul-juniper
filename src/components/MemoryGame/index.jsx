import React, { useState, createRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactCardFlip from "react-card-flip";
import { Image, Card, Col, Row, Modal } from "antd";
import Confetti from "react-dom-confetti";
import { Redirect } from "react-router-dom";
import imagesArr from "../memoryCardBackImages";
import cardFrontImage from "../../images/memoryCardFront.png";
import successSymbol from "../../images/successSymbol.svg";
import MemoryGameFactList from "../MemoryGameFactList/index";
import "./index.css";
import confettiConfig from "../confettiConfig";

const Cards = ({ cardStates }) => {
  const [t] = useTranslation();

  const cardsData = [
    ...t("memoryGame.cards", {
      returnObjects: true,
    }),
  ];

  // imagesArr[0]'s descriptions is stored in imageDescriptionsArr[0].
  // same thing is repeated for all elements off arrays.
  const CardBackSidesArr = imagesArr.map((image, index) => {
    const imageIndex = imagesArr.indexOf(image);
    const cardData = cardsData[imageIndex];
    return (
      // id is be used to match same images
      <div key={cardData.description} id={index}>
        <Image
          src={image}
          alt={cardData.description}
          preview={false}
          className="cardImage"
        />
        <figcaption className="cardFigcaption">
          {cardData.description}
        </figcaption>
      </div>
    );
  });

  const [coupledCardsArr, setCoupledCardsArr] = useState([
    ...CardBackSidesArr,
    ...CardBackSidesArr,
  ]);

  // Shuffles cards
  // Check Fisher–Yates shuffle algorithm https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  useEffect(() => {
    const copyOfCoupledCardsArr = [...coupledCardsArr];
    for (let i = copyOfCoupledCardsArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [copyOfCoupledCardsArr[i], copyOfCoupledCardsArr[j]] = [
        copyOfCoupledCardsArr[j],
        copyOfCoupledCardsArr[i],
      ];
    }
    setCoupledCardsArr(copyOfCoupledCardsArr);
  }, []);

  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCardIndexes, setMatchedCardIndexes] = useState([]);

  const handleClick = (index, id, setCardState) => {
    setCardState(true);
    setSelectedCards((prevState) => [...prevState, { index, id }]);
    // State updates asynchronously
    // So last item inside selectedCards will be previous card's index
    const prevIndex = selectedCards.length - 1;
    const prevCard = selectedCards[prevIndex];
    const curIndex = index;
    const curId = id;
    const prevCardState = prevCard ? cardStates[prevCard.index][0] : "";
    if (
      prevCard &&
      prevCard.id === curId &&
      prevCard.index !== curIndex &&
      // when card is flipped its state becomes true
      // line below checks if previously card is still flipped or not
      prevCardState
    ) {
      setMatchedCardIndexes([prevCard.index, index]);
    } else {
      setTimeout(() => {
        setCardState(false);
      }, [1750]);
    }
  };

  const refArr = [];

  // Defines how cards will be displayed on screen
  // This is not stored in state.
  // Because it was making individual card state changes(flipping) not appear on screen
  const gameCards = coupledCardsArr.map((cardBackImage, index) => {
    const cardId = cardBackImage.props.id;
    const cardState = cardStates[index][0];
    const setCardState = cardStates[index][1];
    refArr.push(createRef());
    return (
      <Col key={index} ref={refArr[index]} span={3}>
        <div className="memoryCard successSymbol">
          <Image
            src={successSymbol}
            alt="success"
            className="cardImage"
            preview={false}
          />
        </div>

        <ReactCardFlip
          isFlipped={cardState}
          flipDirection="vertical"
          className="memoryCard"
        >
          <Card
            onClick={() => handleClick(index, cardId, setCardState)}
            className="memoryCard"
          >
            <Image
              src={cardFrontImage}
              preview={false}
              alt="green question mark"
              className="cardImage"
            />
          </Card>
          <Card
            onClick={() => handleClick(index, cardId, setCardState)}
            className="memoryCard"
          >
            {cardBackImage}
          </Card>
        </ReactCardFlip>
      </Col>
    );
  });

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
    <Row className="cardContainer">
      <Confetti active={completed} config={confettiConfig} />
      <Col span={16} offset={2}>
        <Row>{gameCards}</Row>
      </Col>
      <Col span={2} offset={2}>
        <Confetti active={completed} config={confettiConfig} />
        <MemoryGameFactList facts={matchedCards} />
      </Col>
    </Row>
  );
};

export default Cards;
