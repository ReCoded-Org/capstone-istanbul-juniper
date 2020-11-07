import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Modal } from 'antd';
import Confetti from 'react-dom-confetti';
import { Redirect } from 'react-router-dom';
import MemoryGameFactList from '../MemoryGameFactList/index';
import './index.css';
import confettiConfig from '../confettiConfig';
import memoryCardBackSidesArr from '../memoryCardBackSidesArr';
import MemoryGameCards from '../MemoryGameCards';
import CARD_BACKSIDE_IMAGES_ARR from '../memoryCardBackSideImages';

const Cards = () => {
    const [t] = useTranslation();
    const cardsDataArr = [
        ...t('memoryGame.cards', {
            returnObjects: true,
        }),
    ];
    const factsTitle = t('memoryGame.facts');
    const gameTitle = t('memoryGame.title');
    const BackSidesArr = memoryCardBackSidesArr(cardsDataArr);
    const [cardsArr, setCardsArr] = useState(BackSidesArr);

    // useEffect(() => {
    //     const shuffledCards = shuffle(coupledCardsArr);
    //     setCoupledCardsArr(shuffledCards);
    // }, []);

    const [matchedCardIndexes, setMatchedCardIndexes] = useState([]);
    const refArr = [];
    const [matchedCards, setMatchedCards] = useState([]);
    const [completed, setCompleted] = useState(false);

    // makes complete icon visible for both matches
    useEffect(() => {
        matchedCardIndexes.forEach(matchedIndex => {
            const card = refArr[matchedIndex].current.children[1];
            const completeIcon = refArr[matchedIndex].current.children[0];
            completeIcon.style.display = 'inline-block';
            card.style.display = 'none';
        });
    }, [matchedCardIndexes]);

    useEffect(() => {
        // matchedCardIndexes stores indexes of both matches.
        // Use of both indexes eventually leads to same objects.
        // So, it doesn't matter if index 1 or 0 used
        const matchedCardIndex = matchedCardIndexes[1];
        if (matchedCardIndex) {
            const newMatch = cardsDataArr.find(
                data => data.description === cardsArr[matchedCardIndex].key
            );
            setMatchedCards([...matchedCards, newMatch]);
        }
    }, [matchedCardIndexes]);

    const [redirect, setRedirect] = useState();

    useEffect(() => {
        const maxNumFacts = cardsArr.length;
        if (matchedCards.length === maxNumFacts) {
            setCompleted(true);
            Modal.success({
                content: 'You have completed the game!',
                onOk: () => setRedirect(true),
            });
        }
    }, [matchedCards]);
    //
    return redirect ? (
        <>
            <Redirect to='/' />
        </>
    ) : (
        <Row className='memoryGame' justify='space-around'>
            <Confetti active={completed} config={confettiConfig} />
            <Col xs={22} md={20} xl={17}>
                <h1 className='memoryGame__title'>{gameTitle}</h1>
                <Row justify='center'>
                    <MemoryGameCards
                        setMatchedCardIndexes={setMatchedCardIndexes}
                        refArr={refArr}
                        cardsArr={cardsArr}
                    />
                </Row>
            </Col>
            <Col xs={20}>
                <Confetti active={completed} config={confettiConfig} />
                <MemoryGameFactList facts={matchedCards} title={factsTitle} />
            </Col>
        </Row>
    );
};

export default Cards;
