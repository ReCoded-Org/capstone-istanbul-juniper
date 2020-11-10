// import React, { useState, createRef } from 'react';
// import ReactCardFlip from 'react-card-flip';
// import { Col, Card } from 'antd';
// import FrontImage from '../../../images/memoryGameFrontImage.png';
// import successSymbol from '../../../images/memoryGameSuccessSymbol.svg';
// import './index.css';

// const GameCards = ({ setMatchedCardIndexes, refArr, cardsArr }) => {
//     const [selectedCards, setSelectedCards] = useState([]);
//     const initialStates = {};
//     cardsArr.forEach(card => {
//         initialStates[card.key] = false;
//     });
//     const [cardStates, setCardStates] = useState(initialStates);

//     const handleClick = (curKey, index) => {
//         const flippedState = { [curKey]: true };
//         setCardStates(prevState => ({ ...prevState, ...flippedState }));
//         setSelectedCards(prevState => [...prevState, { key: curKey, index }]);
//         // Last item inside selectedCards will be previous card's index
//         // Because selectedCards is being used before it gets updated
//         const prevSelectedCardsIndex = selectedCards.length - 1;
//         const prevKey = selectedCards[prevSelectedCardsIndex]
//             ? selectedCards[prevSelectedCardsIndex].key
//             : '';
//         const prevCardState = cardStates[prevKey];
//         if (
//             prevKey &&
//             // prevCardState makes sure that only flipped cards match
//             prevCardState &&
//             (curKey === `Clone of ${prevKey}` ||
//                 prevKey === `Clone of ${curKey}`)
//         ) {
//             setMatchedCardIndexes({
//                 prevCardsArrIndex: selectedCards[prevSelectedCardsIndex].index,
//                 curCardsArrIndex: index,
//             });
//         } else {
//             setTimeout(() => {
//                 const unFlippedState = { [curKey]: false };
//                 setCardStates(prevState => ({
//                     ...prevState,
//                     ...unFlippedState,
//                 }));
//             }, [1750]);
//         }
//     };

//     // Defines how cards will be displayed on screen
//     return cardsArr.map((cardBackImage, index) => {
//         const imageKey = cardBackImage.key;
//         const flipState = cardStates[imageKey];
//         // refArr is created to manipulate style.display of success card and flip card
//         refArr.push(createRef());
//         return (
//             <Col
//                 key={imageKey}
//                 ref={refArr[index]}
//                 xs={10}
//                 sm={6}
//                 md={4}
//                 lg={3}
//             >
//                 <Card className='successCard'>
//                     <img
//                         src={successSymbol}
//                         alt='success'
//                         preview={false}
//                         className='successSymbol'
//                     />
//                 </Card>

//                 <ReactCardFlip isFlipped={flipState} flipDirection='vertical'>
//                     <Card
//                         onClick={() => handleClick(imageKey, index)}
//                         className='memoryCard'
//                     >
//                         <img
//                             src={FrontImage}
//                             preview={false}
//                             alt='green question mark'
//                             className='questionMark'
//                         />
//                     </Card>

//                     <Card
//                         onClick={() => handleClick(imageKey, index)}
//                         className='memoryCard'
//                     >
//                         {cardBackImage}
//                     </Card>
//                 </ReactCardFlip>
//             </Col>
//         );
//     });
// };

// export default GameCards;
import React, { useState, useEffect } from 'react';
import './index.css';
import ReactCardFlip from 'react-card-flip';
import { Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import questionMark from '../../../images/memoryGameFrontImage.png';
import memoryGameSuccessSymbol from '../../../images/memoryGameSuccessSymbol.svg';
import cardStateGenerator from '../cardStateGenerator';

const MemoryGameCards = () => {
    const NUM_REQUIRED_MATCHES = 2;
    const [t] = useTranslation();
    const cardsDataArr = [
        ...t('memoryGame.cards', {
            returnObjects: true,
        }),
    ];
    const [cardStates, setCardStates] = useState(
        cardStateGenerator(cardsDataArr, NUM_REQUIRED_MATCHES)
    );
    const [selectedCards, setSelectedCards] = useState([]);

    const handleClick = currentCardState => {
        const copyOfCardStates = [...cardStates];
        const currentIndex = cardStates.indexOf(currentCardState);
        copyOfCardStates[currentIndex].isFlipped = true;
        setCardStates(() => [...copyOfCardStates]);
        setSelectedCards(prevState => [...prevState, currentCardState]);
    };

    useEffect(() => {
        if (selectedCards.length === NUM_REQUIRED_MATCHES) {
            const lastNCards = selectedCards.slice(-NUM_REQUIRED_MATCHES);
            const curCard = lastNCards[lastNCards.length - 1];
            const otherCards = lastNCards.filter(
                card => lastNCards.indexOf(card) !== lastNCards.indexOf(curCard)
            );
            const matchingClones = otherCards.filter(
                prevCard =>
                    prevCard.id !== curCard.id &&
                    prevCard.description === curCard.description &&
                    prevCard.isFlipped &&
                    curCard.isFlipped
            );
            const matchArr = [...matchingClones, curCard];
            const copyOfCardStates = [...cardStates];
            if (matchArr.length === NUM_REQUIRED_MATCHES) {
                matchArr.forEach(match => {
                    const targetIndex = copyOfCardStates.indexOf(match);
                    copyOfCardStates[targetIndex] = {
                        ...copyOfCardStates[targetIndex],
                        isMatched: true,
                    };
                });
                setCardStates(() => [...copyOfCardStates]);
                setSelectedCards([]);
            } else if (NUM_REQUIRED_MATCHES === selectedCards.length) {
                selectedCards.forEach(card => {
                    const targetIndex = copyOfCardStates.indexOf(card);
                    copyOfCardStates[targetIndex] = {
                        ...copyOfCardStates[targetIndex],
                        isFlipped: false,
                    };
                });
                setSelectedCards([]);
                setTimeout(() => {
                    setCardStates(() => [...copyOfCardStates]);
                }, 750);
            }
        }
    }, [cardStates]);
    return cardStates.map(cardState => {
        // key is not descriptive but im not using it.
        return (
            <Col lg={4} key={cardState.id}>
                {cardState.isMatched ? (
                    <Card className='successCard'>
                        <img
                            src={memoryGameSuccessSymbol}
                            alt='Success symbol'
                            className='successCard___symbol'
                        />
                    </Card>
                ) : (
                    <ReactCardFlip
                        isFlipped={cardState.isFlipped}
                        flipDirection='vertical'
                    >
                        <Card
                            className='memoryGameCard'
                            onClick={() => handleClick(cardState)}
                        >
                            <img
                                src={questionMark}
                                alt='Green question mark'
                                className='memoryGameCard___questionMark'
                            />
                        </Card>
                        <Card className='memoryGameCard'>
                            <img
                                src={cardState.img}
                                alt={cardState.description}
                                className='memoryGameCard___image'
                            />
                            <figcaption>{cardState.description}</figcaption>
                        </Card>
                    </ReactCardFlip>
                )}
            </Col>
        );
    });
};

export default MemoryGameCards;
