import React from "react";
import * as invariant from "invariant";
import CARD_BACKSIDE_IMAGES from "./memoryCardBackSideImages";
import shuffle from "./shuffle";

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
  const cardDataAndBacksidesWithClones = [
    ...cardDataAndBacksides,
    ...cardDataAndBacksides,
  ];
  const shuffledCardDataAndBacksidesWithClones = shuffle(
    cardDataAndBacksidesWithClones
  );

  const cardBackSides = [];
  return shuffledCardDataAndBacksidesWithClones.map((dataAndImage) => {
    const { description } = dataAndImage[0];
    const image = dataAndImage[1];
    const isClone = cardBackSides.find(
      (prevDescription) => prevDescription === description
    )
      ? true
      : "";
    cardBackSides.push(description);
    return (
      // matching cards should have same id
      <div key={isClone ? `Clone of ${description}` : description}>
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
