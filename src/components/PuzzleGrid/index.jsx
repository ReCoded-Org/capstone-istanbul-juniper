import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import puzzledImage from "./../../images/habitat.jpg";
import shuffle from "./../memorygame/shuffle";
import "./index.css";

const NUM_OF_TILES = 6;

// PuzzleGrid is the component that generates and includes the tiles of the puzzle
// it generates 6 tiles ordered vertically on top of each other
// each tile's background is 1/6 of the image. After the tiles are generated they are put
// in an array and ordered randomly
// a user can click on one tile to select and then click on another tile to swap their places
// the user will swap the places of each tile to put it in its correct position
// when all tiles are placed in their correct position the full image is displayed
const PuzzleGrid = () => {
  // currentPuzzleState holds the current order of the tiles and updates them when the user swaps tiles
  const [currentPuzzleState, setCurrentPuzzleState] = useState([]);
  // selectedTileId state shows if there is a tile selected and which one is selected if any
  const [selectedTileId, setSelectedTileId] = useState(null);
  // if unsolved it displays the tiles and when solved it displays the full image
  const [isSolved, setIsSolved] = useState(false);

  const tilesGenerator = () => {
    const newTilesArray = [];
    // for loop to generate tiles where tiles are puzzle pieces
    for (let tileId = 0; tileId < NUM_OF_TILES; tileId++) {
      let tileTopStyling = tileId * 100;
      // value of selected is used for styling purposes where the selected tile should be highlighted
      // value of top is used for fitting the image inside the tile and give a cropping effect
      // This effect is achieved by creating a div for each tile that contains an image
      // that's 6 times larger than the div then move the image to the top by setting the
      // the overflow value of the containing div to hidden and moving the image to the top
      // using a percentage of the height of the wrapping div (percetange is set according to Id)
      // the image is moved to the top by giving it a minus top value
      let newTile = { id: tileId, selected: false, top: tileTopStyling };
      newTilesArray.push(newTile);
    }

    const randomizedTilesArray = shuffle(newTilesArray);
    setCurrentPuzzleState(randomizedTilesArray);
  };

  useEffect(() => {
    tilesGenerator();
  }, []);

  useEffect(() => {
    checkSolution();
  }, [currentPuzzleState]);

  const handleClick = (clickedTileId) => {
    // if selectedTileId's value is not equal to null (meaning there is a tile seleted already)
    // then when another tile is clicked swap both tiles' places
    // else set the selectedTileId to the id of the clicked tile
    if (selectedTileId !== null) {
      const prevId = selectedTileId;
      swapTiles(prevId, clickedTileId);
    } else {
      setSelectedTileId(clickedTileId);
      const clickedTileIndex = currentPuzzleState.findIndex(
        (tile) => tile.id === clickedTileId
      );
      // set the select value of the tile to true
      const copyOfPuzzleState = [...currentPuzzleState];
      copyOfPuzzleState[clickedTileIndex] = {
        ...copyOfPuzzleState[clickedTileIndex],
        selected: true,
      };
      setCurrentPuzzleState(copyOfPuzzleState);
    }
  };

  // This function takes the Id of two tiles and swaps their places
  const swapTiles = (tileId0, tileId1) => {
    let newTiles = [...currentPuzzleState];
    let tileIndex0 = currentPuzzleState.findIndex(
      (tile) => tile.id === tileId0
    );
    let tileIndex1 = currentPuzzleState.findIndex(
      (tile) => tile.id === tileId1
    );
    let tile0 = { ...currentPuzzleState[tileIndex0] };
    let tile1 = { ...currentPuzzleState[tileIndex1] };
    newTiles[tileIndex0] = tile1;
    newTiles[tileIndex1] = tile0;
    newTiles.forEach((tile) => (tile.selected = false));
    setCurrentPuzzleState(newTiles);
    setSelectedTileId(null);
  };

  const checkSolution = () => {
    // tiles are saved in an array indexed from 0 to n (6) and displayed in that order
    // first condition checks if tile's id is equal to its index in the array and returns false/true
    // since initial acc value is true, second condition checks if prev value is true and keeps its value
    const isCorrect = currentPuzzleState.reduce(
      (acc, currTile, tileCurrIndex) => {
        if (currTile.id !== tileCurrIndex || acc === false) {
          return false;
        } else {
          return acc;
        }
      },
      true
    );
    setIsSolved(isCorrect);
  };

  let gridBody;
  if (isSolved) {
    gridBody = (
      <img
        className="puzzleGrid__imageDisplayed"
        src={puzzledImage}
        alt="tile"
      />
    );
  } else {
    gridBody = currentPuzzleState.map((tile) => {
      return (
        <Row
          key={"tileNumber-" + tile.id}
          className={
            tile.selected
              ? "selectedTileId puzzleGrid__tile"
              : "puzzleGrid__tile"
          }
          onClick={() => handleClick(tile.id)}
        >
          <img
            className="puzzleGrid__puzzledImage"
            src={puzzledImage}
            alt="tile from the image"
            style={{ top: `-${tile.top}%` }}
          />
        </Row>
      );
    });
  }

  return <Col className="puzzleGrid">{gridBody}</Col>;
};

export default PuzzleGrid;
