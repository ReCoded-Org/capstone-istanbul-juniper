import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Image, Card, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import cardFrontImage from "../../images/memoryCardFront.png";
import imagesArr from "../memoryCardBackImages";
import "./index.css";

const MemoryGameCards = () => {
  const [t] = useTranslation();

  const imageDescriptionsArr = [
    ...t("memoryGame.descriptions", {
      returnObjects: true,
    }),
  ];

  // imagesArr[0]'s descriptions is stored in imageDescriptionsArr[0].
  // same thing is repeated for all elements off arrays.
  const CardBackSidesArr = imagesArr.map((image, index) => {
    const imageIndex = imagesArr.indexOf(image);
    const imageDescription = imageDescriptionsArr[imageIndex];
    return (
      // id is be used to match same images
      <div key={imageDescription} id={index}>
        <Image
          src={image}
          alt={imageDescription}
          preview={false}
          className="cardImage"
        />
        <figcaption className="cardFigcaption">{imageDescription}</figcaption>
      </div>
    );
  });

  const [isFlippedArr, setIsFlippedArr] = useState([]);

  const handleClick = (index, cardId) => {
    const copyOfIsFlippedArr = [...isFlippedArr];
    copyOfIsFlippedArr[index] = !copyOfIsFlippedArr[index];
    setIsFlippedArr(copyOfIsFlippedArr);
  };

  // there should be a clone for each card
  const coupledBackSidesArr = [...CardBackSidesArr, ...CardBackSidesArr];
  const memoryCards = coupledBackSidesArr.map((cardBackImage, index) => {
    const cardId = cardBackImage.props.id;
    return (
      <Col key={index}>
        {/* index is being used to make cards flip individually */}
        <ReactCardFlip isFlipped={isFlippedArr[index]} flipDirection="vertical">
          <Card
            onClick={() => handleClick(index, cardId)}
            className="memoryCard"
          >
            <Image
              src={cardFrontImage}
              preview={false}
              alt="green question mark"
              className="cardImage"
            />
          </Card>
          <Card onClick={() => handleClick(index)} className="memoryCard">
            {cardBackImage}
          </Card>
        </ReactCardFlip>
      </Col>
    );
  });

  return <Row className="cardContainer">{memoryCards}</Row>;
};

export default MemoryGameCards;
