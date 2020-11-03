import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Image, Card, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import imagesArr from "../memoryCardBackImages";
import "./index.css";
import cardFrontImage from "../../images/memoryCardFront.png";

const MemoryGame = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [t] = useTranslation();

  const imageDescriptionsArr = [
    ...t("memoryGame.descriptions", {
      returnObjects: true,
    }),
  ];

  // imagesArr[0]'s descriptions is stored in imageDescriptionsArr[0].
  // same thing is repeated for all elements off arrays.
  const memoryCardBackImages = imagesArr.map((image) => {
    const imageIndex = imagesArr.indexOf(image);
    const imageDescription = imageDescriptionsArr[imageIndex].description;
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

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const memoryCards = memoryCardBackImages.map((cardBackImage, index) => {
    return (
      <div key={index}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <Card onClick={handleClick} className="memoryCard">
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
          <Card onClick={handleClick} className="memoryCard">
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

export default MemoryGame;
