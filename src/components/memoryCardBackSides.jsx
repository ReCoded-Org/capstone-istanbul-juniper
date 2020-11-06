import React from "react";
import * as invariant from "invariant";
import CARD_BACKSIDE_IMAGES from "./memoryCardBackSideImages";

// This function will be used in "MemoryGame" component
const cardBackSidesArr = (cardDataArr) => {
  invariant(
    cardDataArr.length === CARD_BACKSIDE_IMAGES.length,
    "'CARD_BACKSIDE_IMAGES' and 'cardData' are not matching"
  );

  const cardDataAndBacksides = cardDataArr.map((cardData, index) => {
    const cardBacksideImage = CARD_BACKSIDE_IMAGES[index];
    return [cardData, cardBacksideImage];
  });

  return cardDataAndBacksides.map((dataAndImage, index) => {
    const { description } = dataAndImage[0];
    const image = dataAndImage[1];
    return (
      // matching cards should have same id
      <div key={description} id={index}>
        <img
          src={image}
          alt={description}
          preview={false}
          className="memoryGameCardImages"
        />
        <figcaption>{description}</figcaption>
      </div>
    );
  });
};

export default cardBackSidesArr;
