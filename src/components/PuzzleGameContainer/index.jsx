import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import habitatImg from "./../../images/puzzleGame/habitat.jpg";
import yellowSpotImg from "./../../images/yellow-spot.svg";
import "./index.css";

// This component contains the list of images the user can choose to solve
// it also renders the PuzzleGrid component
// When the user clicks on an image it will be passed to the PuzzleGrid component as a prop
// PuzzleGrid then renders the puzzle tiles of that image
const PuzzleGameContainer = () => {
  // currentImage state will be passed to the PuzzleGrid Component
  const [currentImage, setCurrentImage] = useState(habitatImg);
  const images = [habitatImg, yellowSpotImg];

  const handleImageClick = (e) => {
    setCurrentImage(e.target.getAttribute("src"));
  };

  return (
    <Card size="small" className="puzzlePage__content-puzzleBox gameContainer">
      <Row className="gameContainer__listOfImages">
        {images.map((img) => {
          return (
            <Col
              onClick={(e) => handleImageClick(e)}
              className="gameContainer__listOfImages--imgContainer"
            >
              <img src={img} alt="click on the image to play image puzzle" />
            </Col>
          );
        })}
      </Row>
      <Row className="gameContainer__puzzleGrid"></Row>
    </Card>
  );
};

export default PuzzleGameContainer;
