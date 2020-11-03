import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'antd';

const MemoryGame = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection={'vertical'}>
            <Card
                hoverable
                style={{ width: 240 }}
                onClick={handleClick}
                cover={
                    <img
                        alt='example'
                        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                }
            ></Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={
                    <img
                        alt='example'
                        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                }
                onClick={handleClick}
            ></Card>
        </ReactCardFlip>
    );
};

export default MemoryGame;
