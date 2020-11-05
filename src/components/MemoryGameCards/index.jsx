import React, { useState, createRef } from "react";
import ReactCardFlip from "react-card-flip";
import { Col, Image, Card } from "antd";
import cardFrontImage from "../../images/memoryCardFront.png";
import successSymbol from "../../images/successSymbol.svg";
import "./index.css";

const GameCards = ({
  setMatchedCardIndexes,
  cardStates,
  refArr,
  coupledCardsArr,
}) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const handleClick = (index, id, setCardState) => {
    setCardState(true);
    setSelectedCards((prevState) => [...prevState, { index, id }]);
    // Last item inside selectedCards will be previous card's index
    // Because selectedCards is being used before it gets updated
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

  // Defines how cards will be displayed on screen
  // This is not stored in state.
  // Because it was making individual card state changes(flipping) not appear on screen
  return coupledCardsArr.map((cardBackImage, index) => {
    const cardId = cardBackImage.props.id;
    const cardState = cardStates[index][0];
    const setCardState = cardStates[index][1];
    refArr.push(createRef());
    return (
      <Col key={index} ref={refArr[index]} span={3}>
        <Image
          src={successSymbol}
          alt="success"
          preview={false}
          className="memoryCard successSymbol"
        />

        <ReactCardFlip isFlipped={cardState} flipDirection="vertical">
          <Card
            onClick={() => handleClick(index, cardId, setCardState)}
            className="memoryCard"
          >
            <Image
              src={cardFrontImage}
              preview={false}
              alt="green question mark"
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
};

export default GameCards;
