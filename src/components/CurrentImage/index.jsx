import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import puzzledImage from "./../../images/habitat.jpg";
import "./index.css";

// CurrentImage is the component that generates and includes the tiles of the puzzle
// it generates 6 tiles ordered vertically on top of each other
// each tile's background is 1/6 of the image. After the tiles are generated they are put
// in an array and ordered randomly
// a user can click on one tile to select and then click on another tile to swap their places
// the user will swap the places of each tile to put it in its correct position
// when all tiles are placed in their correct position the full image is displayed
const CurrentImage = () => {
  const [generatedTiles, setGeneratedTiles] = useState([]);
  // selectedTile state shows if there is a tile selected and which one is selected if any
  const [selectedTile, setSelectedTile] = useState(null);
  // if unsolved it displays the tiles and when solved it displays the full image
  const [isSolved, setIsSolved] = useState(false);
  const tilesGenerator = () => {
    const newTilesArray = [];
    // for loop to generate tiles where tiles are puzzle pieces
    const numOfTiles = 6;
    for (let tileId = 0; tileId < numOfTiles; tileId++) {
      let tileTopStyling = tileId * 100;
      // value of selected is used for styling purposes where the selected tile should be highlighted
      // value of top is used for fitting the image inside the tile
      let newTile = { id: tileId, selected: false, top: tileTopStyling };
      newTilesArray.push(newTile);
    }
    // for loop that generates a random and extracts the element with the index
    // equal to the random number, then pushes that element to the end of newTilesArray.
    for (let i = 0; i < newTilesArray.length; i++) {
      let random = Math.floor(Math.random() * (newTilesArray.length - 1));
      let randomItemArray = newTilesArray.splice(random, 1);
      newTilesArray.push(randomItemArray[0]);
    }
    // Set the randomized array as generated tiles
    setGeneratedTiles(newTilesArray);
  };

  useEffect(() => {
    tilesGenerator();
  }, []);

  useEffect(() => {
    checkSolution();
  }, [generatedTiles]);

  const handleSelect = (currId) => {
    // if selectedTile's value is not equal to null (meaning there a tile seleted already)
    // then when another tile is clicked swap both tiles' places
    // else set the selectedTile to the id of the clicked tile
    if (selectedTile !== null) {
      const prevId = selectedTile;
      swapTiles(prevId, currId);
    } else {
      setSelectedTile(currId);
      const tileIndex = generatedTiles.findIndex((tile) => tile.id === currId);
      // set the select value of the tile to true
      generatedTiles[tileIndex] = {
        ...generatedTiles[tileIndex],
        selected: true,
      };
    }
  };

  const swapTiles = (id0, id1) => {
    let newTiles = [...generatedTiles];
    let index0 = generatedTiles.findIndex((tile) => tile.id === id0);
    let index1 = generatedTiles.findIndex((tile) => tile.id === id1);
    let tile0 = { ...generatedTiles[index0] };
    let tile1 = { ...generatedTiles[index1] };
    newTiles[index0] = tile1;
    newTiles[index1] = tile0;
    newTiles.forEach((tile) => (tile.selected = false));
    setGeneratedTiles(newTiles);
    setSelectedTile(null);
  };

  const checkSolution = () => {
    // tiles are saved in an array indexed from 0 to n (6) and displayed in that order
    // first condition checks if tile's id is equal to its index in the array and returns false/true
    // since initial acc value is true, second condition checks if prev value is true and keeps its value
    const isCorrect = generatedTiles.reduce((acc, curr, index) => {
      if (curr.id !== index) {
        return false;
      } else if (acc === true) {
        return acc;
      }
    }, true);
    setIsSolved(isCorrect);
  };

  return (
    <Col className="currentImage">
      {!isSolved ? (
        generatedTiles.map((tile) => {
          return (
            <Row
              key={"tileNumber-" + tile.id}
              className={
                tile.selected
                  ? "selectedTile currentImage__tile"
                  : "currentImage__tile"
              }
              onClick={() => handleSelect(tile.id)}
            >
              <img
                className="currentImage__puzzledImage"
                src={puzzledImage}
                alt="tile from the image"
                style={{ top: `-${tile.top}%` }}
              />
            </Row>
          );
        })
      ) : (
        <img
          className="currentImage__imageDisplayed"
          src={puzzledImage}
          alt="tile"
        />
      )}
    </Col>
  );
};

export default CurrentImage;
