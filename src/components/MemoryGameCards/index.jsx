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
  const CardBackSidesArr = imagesArr.map((image) => {
    const imageIndex = imagesArr.indexOf(image);
    const imageDescription = imageDescriptionsArr[imageIndex];
    return (
      <div key={imageDescription}>
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
  const initialStates = CardBackSidesArr.map(() => false);
  const [isFlippedArr, setIsFlippedArr] = useState(initialStates);

  const handleClick = (index) => {
    const copyOfIsFlippedArr = [...isFlippedArr];
    copyOfIsFlippedArr[index] = !copyOfIsFlippedArr[index];
    setIsFlippedArr(copyOfIsFlippedArr);
  };
  const memoryCards = CardBackSidesArr.map((cardBackImage, index) => {
    return (
      <div key={index}>
        <ReactCardFlip isFlipped={isFlippedArr[index]} flipDirection="vertical">
          <Card onClick={() => handleClick(index)} className="memoryCard">
            <Row>
              <Col>
                <Image
                  src={cardFrontImage}
                  preview={false}
                  alt="green question mark"
                  className="cardImage"
                />
              </Col>
            </Row>
          </Card>
          <Card onClick={() => handleClick(index)} className="memoryCard">
            <Row>
              <Col>{cardBackImage}</Col>
            </Row>
          </Card>
        </ReactCardFlip>
      </div>
    );
  });

  return <>{memoryCards}</>;
};

export default MemoryGameCards;
