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

  const refArr = [];
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCardIndexes, setMatchedCardIndexes] = useState([]);
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

  const handleClick = (index, id, setCardState) => {
    setCardState(true);
    setSelectedCards((prevState) => [...prevState, { index, id }]);
    const prevIndex = selectedCards.length - 1;
    const prevCard = selectedCards[prevIndex];
    const curIndex = index;
    const curId = id;

    if (
      prevCard &&
      prevCard.id === curId &&
      prevCard.index !== curIndex &&
      cardStates[prevCard.index][0]
    ) {
      setMatchedCardIndexes([prevCard.index, index]);
    } else {
      setTimeout(() => {
        setCardState(false);
      }, [1250]);
    }
  };

  const config = {
    angle: "180",
    spread: "360",
    startVelocity: 40,
    elementCount: "200",
    dragFriction: 0.12,
    duration: "4100",
    stagger: "2",
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  const gameCards = coupledCardsArr.map((cardBackImage, index) => {
    const cardId = cardBackImage.props.id;
    const cardState = cardStates[index][0];
    const setCardState = cardStates[index][1];
    refArr.push(createRef());
    return (
      <Col key={index} ref={refArr[index]} span={3}>
        <div className="memoryCard" style={{ display: "none" }}>
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
            onClick={() => handleClick(index, cardId, setCardState, cardState)}
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

  const [facts, setFacts] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    matchedCardIndexes.forEach((matchedIndex) => {
      const card = refArr[matchedIndex].current.children[1];
      const completeIcon = refArr[matchedIndex].current.children[0];
      completeIcon.style.display = "inline-block";
      card.style.display = "none";
    });
    const factIndex = matchedCardIndexes[1];
    if (factIndex) {
      const matchedCard = cardsData.find(
        (data) => data.description === coupledCardsArr[factIndex].key
      );
      setFacts([...facts, matchedCard]);
    }
  }, [matchedCardIndexes]);

  const [redirect, setRedirect] = useState();

  useEffect(() => {
    if (facts.length === CardBackSidesArr.length) {
      setCompleted(true);
      Modal.success({
        content: "You have completed the game!",
        onOk: () => setRedirect(true),
      });
    }
  }, [facts, CardBackSidesArr]);

  return redirect ? (
    <>
      <Redirect to="/" />
    </>
  ) : (
    <Row className="cardContainer">
      <Confetti active={completed} config={config} />
      <Col span={16} offset={2}>
        <Row>{gameCards}</Row>
      </Col>
      <Col span={2} offset={2}>
        <Confetti active={completed} config={config} />
        <MemoryGameFactList facts={facts} />
      </Col>
    </Row>
  );
};

export default Cards;

// add style, responsive, what if user wants to stay and read, use sub components,
// http://reactcommunity.org/react-transition-group/transition
