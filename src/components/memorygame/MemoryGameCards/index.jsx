import React, { useState, createRef } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Col, Card } from 'antd';
import FrontImage from '../../../images/memoryGameFrontImage.png';
import successSymbol from '../../../images/memoryGameSuccessSymbol.svg';
import './index.css';

const GameCards = ({ setMatchedCardIndexes, refArr, cardsArr }) => {
    const [selectedCards, setSelectedCards] = useState([]);
    const initialStates = {};
    cardsArr.forEach(card => {
        initialStates[card.key] = false;
    });
    const [cardStates, setCardStates] = useState(initialStates);

    const handleClick = (curKey, index) => {
        const flippedState = { [curKey]: true };
        setCardStates(prevState => ({ ...prevState, ...flippedState }));
        setSelectedCards(prevState => [...prevState, { key: curKey, index }]);
        // Last item inside selectedCards will be previous card's index
        // Because selectedCards is being used before it gets updated
        const prevSelectedCardsIndex = selectedCards.length - 1;
        const prevKey = selectedCards[prevSelectedCardsIndex]
            ? selectedCards[prevSelectedCardsIndex].key
            : '';
        const prevCardState = cardStates[prevKey];
        if (
            prevKey &&
            // prevCardState makes sure that only flipped cards match
            prevCardState &&
            (curKey === `Clone of ${prevKey}` ||
                prevKey === `Clone of ${curKey}`)
        ) {
            setMatchedCardIndexes({
                prevCardsArrIndex: selectedCards[prevSelectedCardsIndex].index,
                curCardsArrIndex: index,
            });
        } else {
            setTimeout(() => {
                const unFlippedState = { [curKey]: false };
                setCardStates(prevState => ({
                    ...prevState,
                    ...unFlippedState,
                }));
            }, [1750]);
        }
    };

    // Defines how cards will be displayed on screen
    return cardsArr.map((cardBackImage, index) => {
        const imageKey = cardBackImage.key;
        const flipState = cardStates[imageKey];
        // refArr is created to manipulate style.display of success card and flip card
        refArr.push(createRef());
        return (
            <Col
                key={imageKey}
                ref={refArr[index]}
                xs={10}
                sm={6}
                md={4}
                lg={3}
            >
                <Card className='successCard'>
                    <img
                        src={successSymbol}
                        alt='success'
                        preview={false}
                        className='successSymbol'
                    />
                </Card>

                <ReactCardFlip isFlipped={flipState} flipDirection='vertical'>
                    <Card
                        onClick={() => handleClick(imageKey, index)}
                        className='memoryCard'
                    >
                        <img
                            src={FrontImage}
                            preview={false}
                            alt='green question mark'
                            className='questionMark'
                        />
                    </Card>

                    <Card
                        onClick={() => handleClick(imageKey, index)}
                        className='memoryCard'
                    >
                        {cardBackImage}
                    </Card>
                </ReactCardFlip>
            </Col>
        );
    });
};

export default GameCards;
