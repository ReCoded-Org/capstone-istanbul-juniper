import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCardFlip from 'react-card-flip';
import { Image, Card, Col, Row } from 'antd';
import imagesArr from '../memoryCardBackImages';
import cardFrontImage from '../../images/memoryCardFront.png';
import './index.css';

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
    const [isMeltingIceCapsFlipped, setIsMeltingIceCapsFlipped] = useState(
        false
    );
    const [isOzoneHoleFlipped, setIsOzoneHoleFlipped] = useState(false);
    const [isRecycleFlipped, setIsRecycleFlipped] = useState(false);
    const [isWaterPollutionFlipped, setIsWaterPollutionFlipped] = useState(
        false
    );

    const [isAcidRainCloneFlipped, setIsAcidRainCloneFlipped] = useState(false);
    const [
        isAirPollutionCloneFlipped,
        setIsAirPollutionCloneFlipped,
    ] = useState(false);
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
    const [isLitteringCloneFlipped, setIsLitteringCloneFlipped] = useState(
        false
    );
    const [
        isMeltingIceCapsCloneFlipped,
        setIsMeltingIceCapsCloneFlipped,
    ] = useState(false);
    const [isOzoneHoleCloneFlipped, setIsOzoneHoleCloneFlipped] = useState(
        false
    );
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
        ...t('memoryGame.descriptions', {
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
                    className='cardImage'
                />
                <figcaption className='cardFigcaption'>
                    {imageDescription}
                </figcaption>
            </div>
        );
    });
    const coupledBackSidesArr = [...CardBackSidesArr, ...CardBackSidesArr];

    const handleClick = (index, cardId, setCardState, cardState) => {
        setCardState(true);
        setTimeout(() => {
            setCardState(false);
        }, [2000]);
    };

    const memoryCards = coupledBackSidesArr.map((cardBackImage, index) => {
        const cardId = cardBackImage.props.id;
        const cardState = cardStates[index][0];
        const setCardState = cardStates[index][1];
        return (
            <Col key={index}>
                <ReactCardFlip isFlipped={cardState} flipDirection='vertical'>
                    <Card
                        onClick={() =>
                            handleClick(index, cardId, setCardState, cardState)
                        }
                        className='memoryCard'
                    >
                        <Image
                            src={cardFrontImage}
                            preview={false}
                            alt='green question mark'
                            className='cardImage'
                        />
                    </Card>
                    <Card
                        onClick={() => handleClick(index, cardId, setCardState)}
                        className='memoryCard'
                    >
                        {cardBackImage}
                    </Card>
                </ReactCardFlip>
            </Col>
        );
    });

    return <Row className='cardContainer'>{memoryCards}</Row>;
};

export default Cards;
