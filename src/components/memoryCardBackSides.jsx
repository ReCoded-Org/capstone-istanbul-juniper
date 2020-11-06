import React from "react";
import cardBacksideImages from "./memoryCardBackSideImages";
// import "./MemoryGame/index.css";

// This function will be used in "MemoryGame" component
const cardBackSidesArr = (cardsData) => {
  // cardData and cardBacksideImages ordered in same way.
  // For example: cardData[0] holds data for cardBacksideImages[0]
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

export default cardBackSidesArr;
