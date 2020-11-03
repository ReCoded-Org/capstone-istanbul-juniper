import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Image, Card, Row, Col } from "antd";
import questionMark from "../../images/questionMark.png";
import "./index.css";

const MemoryGame = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Card onClick={handleClick} className="memoryCard">
        <Row>
          <Col>
            <Image
              src={questionMark}
              preview={false}
              alt="green question mark"
              className="cardImage"
            />
          </Col>
        </Row>
      </Card>
      <Card onClick={handleClick} className="memoryCard">
        <Row>
          <Col>
            <Image
              src={questionMark}
              preview={false}
              alt="green question mark"
              className="cardImage"
            />
          </Col>
        </Row>
      </Card>
    </ReactCardFlip>
  );
};

export default MemoryGame;
