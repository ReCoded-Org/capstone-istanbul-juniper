import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Image, Card, Row, Col } from 'antd';
import './index.css';
import questionMark from '../../images/memoryCardFront.png';

const MemoryGame = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const memoryCards = backSideImages.map(image => console.log(image));
    //     <>
    //         <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
    //             <Card onClick={handleClick} className='memoryCard'>
    //                 <Row>
    //                     <Col>
    //                         <Image
    //                             src={questionMark}
    //                             preview={false}
    //                             alt='green question mark'
    //                             className='cardImage'
    //                         />
    //                     </Col>
    //                 </Row>
    //             </Card>
    //             <Card onClick={handleClick} className='memoryCard'>
    //                 <Row>
    //                     <Col>
    //                         <Image
    //                             src={image}
    //                             preview={false}
    //                             alt='memory card image'
    //                             className='cardImage'
    //                         />
    //                     </Col>
    //                 </Row>
    //             </Card>
    //         </ReactCardFlip>
    //     </>
    // ));

    return { memoryCards };
};

export default MemoryGame;
