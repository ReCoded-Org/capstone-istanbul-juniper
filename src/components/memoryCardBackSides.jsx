import React from "react";
import { Image } from "antd";
import cardBacksideImages from "./memoryCardBackSideImages";
import "./MemoryGame/index.css";

const cardBackSides = (cardsData) => {
  // imagesArr[0]'s descriptions is stored in imageDescriptionsArr[0].
  // same thing is repeated for all elements off arrays.
  return cardBacksideImages.map((image, index) => {
    const cardData = cardsData[index];
    return (
      // matching cards should have same id
      <div key={cardData.description} id={index}>
        <img
          src={image}
          alt={cardData.description}
          preview={false}
          className="memoryGameCardImages"
        />
        <figcaption>{cardData.description}</figcaption>
      </div>
    );
  });
};

export default cardBackSides;
