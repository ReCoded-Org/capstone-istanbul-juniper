import React, { useState, createRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactCardFlip from "react-card-flip";
import { Image, Card, Col, Row } from "antd";
import imagesArr from "../memoryCardBackImages";
import cardFrontImage from "../../images/memoryCardFront.png";
import successSymbol from "../../images/successSymbol.svg";
import "./index.css";

const Cards = () => {
  const [isAcidRainFlipped, setIsAcidRainFlipped] = useState(false);
  const [isAirPollutionFlipped, setIsAirPollutionFlipped] = useState(false);
  const [isAlternateEnergyFlipped, setIsAlternateEnergyFlipped] = useState(
    false
  );
  const [isChemicalWasteFlipped, setIsChemicalWasteFlipped] = useState(false);
  const [isDeforestationFlipped, setIsDeforestationFlipped] = useState(false);
  const [isGlobalWarmingFlipped, setIsGlobalWarmingFlipped] = useState(false);
  const [isGreenhouseEffectFlipped, setIsGreenhouseEffectFlipped] = useState(
    false
  );
  const [isLitteringFlipped, setIsLitteringFlipped] = useState(false);
  const [isMeltingIceCapsFlipped, setIsMeltingIceCapsFlipped] = useState(false);
  const [isOzoneHoleFlipped, setIsOzoneHoleFlipped] = useState(false);
  const [isRecycleFlipped, setIsRecycleFlipped] = useState(false);
  const [isWaterPollutionFlipped, setIsWaterPollutionFlipped] = useState(false);

  const [isAcidRainCloneFlipped, setIsAcidRainCloneFlipped] = useState(false);
  const [isAirPollutionCloneFlipped, setIsAirPollutionCloneFlipped] = useState(
    false
  );
  const [
    isAlternateEnergyCloneFlipped,
    setIsAlternateEnergyCloneFlipped,
  ] = useState(false);
  const [
    isChemicalWasteCloneFlipped,
    setIsChemicalWasteCloneFlipped,
  ] = useState(false);
  const [
    isDeforestationCloneFlipped,
    setIsDeforestationCloneFlipped,
  ] = useState(false);
  const [
    isGlobalWarmingCloneFlipped,
    setIsGlobalWarmingCloneFlipped,
  ] = useState(false);
  const [
    isGreenhouseEffectCloneFlipped,
    setIsGreenhouseEffectCloneFlipped,
  ] = useState(false);
  const [isLitteringCloneFlipped, setIsLitteringCloneFlipped] = useState(false);
  const [
    isMeltingIceCapsCloneFlipped,
    setIsMeltingIceCapsCloneFlipped,
  ] = useState(false);
  const [isOzoneHoleCloneFlipped, setIsOzoneHoleCloneFlipped] = useState(false);
  const [isRecycleCloneFlipped, setIsRecycleCloneFlipped] = useState(false);
  const [
    isWaterPollutionCloneFlipped,
    setIsWaterPollutionCloneFlipped,
  ] = useState(false);

  const cardStates = [
    [isAcidRainFlipped, setIsAcidRainFlipped],
    [isAirPollutionFlipped, setIsAirPollutionFlipped],
    [isAlternateEnergyFlipped, setIsAlternateEnergyFlipped],
    [isChemicalWasteFlipped, setIsChemicalWasteFlipped],
    [isDeforestationFlipped, setIsDeforestationFlipped],
    [isGlobalWarmingFlipped, setIsGlobalWarmingFlipped],
    [isGreenhouseEffectFlipped, setIsGreenhouseEffectFlipped],
    [isLitteringFlipped, setIsLitteringFlipped],
    [isMeltingIceCapsFlipped, setIsMeltingIceCapsFlipped],
    [isOzoneHoleFlipped, setIsOzoneHoleFlipped],
    [isRecycleFlipped, setIsRecycleFlipped],
    [isWaterPollutionFlipped, setIsWaterPollutionFlipped],
    [isAcidRainCloneFlipped, setIsAcidRainCloneFlipped],
    [isAirPollutionCloneFlipped, setIsAirPollutionCloneFlipped],
    [isAlternateEnergyCloneFlipped, setIsAlternateEnergyCloneFlipped],
    [isChemicalWasteCloneFlipped, setIsChemicalWasteCloneFlipped],
    [isDeforestationCloneFlipped, setIsDeforestationCloneFlipped],
    [isGlobalWarmingCloneFlipped, setIsGlobalWarmingCloneFlipped],
    [isGreenhouseEffectCloneFlipped, setIsGreenhouseEffectCloneFlipped],
    [isLitteringCloneFlipped, setIsLitteringCloneFlipped],
    [isMeltingIceCapsCloneFlipped, setIsMeltingIceCapsCloneFlipped],
    [isOzoneHoleCloneFlipped, setIsOzoneHoleCloneFlipped],
    [isRecycleCloneFlipped, setIsRecycleCloneFlipped],
    [isWaterPollutionCloneFlipped, setIsWaterPollutionCloneFlipped],
  ];

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

  const refArr = [];
  const coupledCardsArr = [...CardBackSidesArr, ...CardBackSidesArr];
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCardIndexes, setMatchedCardIndexes] = useState([]);
  const handleClick = (index, id, setCardState) => {
    setCardState(true);
    setSelectedCards((prevState) => [...prevState, { index, id }]);
    const prevIndex = selectedCards.length - 1;
    const prevCard = selectedCards[prevIndex];
    const curIndex = index;
    const curId = id;

    if (prevCard && prevCard.id === curId && prevCard.index !== curIndex) {
      setMatchedCardIndexes([prevCard.index, index]);
    } else {
      setTimeout(() => {
        setCardState(false);
      }, [1000]);
    }
  };

  const gameCards = coupledCardsArr.map((cardBackImage, index) => {
    const cardId = cardBackImage.props.id;
    const cardState = cardStates[index][0];
    const setCardState = cardStates[index][1];
    refArr.push(createRef());
    return (
      <Col key={index} ref={refArr[index]}>
        <div className="memoryCard" style={{ display: "none" }}>
          <Image src={successSymbol} alt="success" className="cardImage" />
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

  useEffect(() => {
    matchedCardIndexes.forEach((matchedIndex) => {
      const card = refArr[matchedIndex].current.children[1];
      const completeIcon = refArr[matchedIndex].current.children[0];
      completeIcon.style.display = "inline-block";
      card.style.display = "none";
    });
  }, [matchedCardIndexes]);

  return <Row className="cardContainer">{gameCards}</Row>;
};

export default Cards;
