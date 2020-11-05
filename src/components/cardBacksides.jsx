import React from "react";
import { Image } from "antd";
import cardBacksideImages from "./memoryCardBackSideImages";

const cardBackSides = (cardsData) => {
  // imagesArr[0]'s descriptions is stored in imageDescriptionsArr[0].
  // same thing is repeated for all elements off arrays.
  return cardBacksideImages.map((image, index) => {
    const cardData = cardsData[index];
    return (
      // id is be used to match same images
      <div key={cardData.description} id={index}>
        <Image
          src={image}
          alt={cardData.description}
          preview={false}
          className="memoryCard__image"
        />
        <figcaption>{cardData.description}</figcaption>
      </div>
    );
  });
};

export default cardBackSides;
