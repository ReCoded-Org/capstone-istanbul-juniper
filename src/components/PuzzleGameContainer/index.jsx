import React, { useState } from "react";
import { Col, Row, Card } from "antd";
import habitatImg from "./../../images/puzzleGame/habitat.jpg";
import conservationImg from "./../../images/puzzleGame/conservation.jpg";
import holdingPlantImg from "./../../images/puzzleGame/holdingPlant.jpg";
import plantingImg from "./../../images/puzzleGame/planting.jpg";
import PuzzleGrid from "./../PuzzleGrid";
import "./index.css";

// This component contains the list of images the user can choose to solve
// it also renders the PuzzleGrid component
// When the user clicks on an image it will be passed to the PuzzleGrid component as a prop
// PuzzleGrid then renders the puzzle tiles of that image
const PuzzleGameContainer = () => {
  const images = [habitatImg, conservationImg, holdingPlantImg, plantingImg];
  // currentImage state will be passed to the PuzzleGrid Component
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (e) => {
    setCurrentImage(e.target.getAttribute("src"));
  };

  return (
    <Card size="small" className="gameContainer">
      <Row className="gameContainer__listOfImages">
        {images.map((img) => {
          return (
            <Col
              onClick={(e) => handleImageClick(e)}
              className="gameContainer__listOfImages--imgContainer"
            >
              <img
                className="gameContainer__listOfImages--img"
                src={img}
                alt="click to choose your puzzle"
              />
            </Col>
          );
        })}
      </Row>
      <Row className="gameContainer__puzzleGrid">
        <PuzzleGrid puzzledImage={currentImage} />
      </Row>
    </Card>
  );
};

export default PuzzleGameContainer;
