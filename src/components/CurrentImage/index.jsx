import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import "./index.css";

const CurrentImage = () => {
  const [generatedTiles, setGeneratedTiles] = useState([]);
  // tileSelected state shows if there is a tile selected and which one is selected if any
  const [tileSelected, setTileSelected] = useState({
    id: null,
    selected: false,
  });
  // if unsolved it displays the tiles and when solved it displays the full image
  const [isSolved, setIsSolved] = useState(false);
  const tilesGenerator = () => {
    let newTilesArray = [];
    // for loop to generate tiles where tiles are puzzle pieces
    // the number 6 is chosen randomly
    for (let i = 0; i < 6; i++) {
      let newTile = { id: i, selected: false };
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
    // if there is a tile selected then clicked tile with the selected one
    // else set tileSelected.select to true and show the id of the tile
    if (tileSelected.selected) {
      const prevId = tileSelected.id;
      swapTiles(prevId, currId);
    } else {
      setTileSelected({ id: currId, selected: true });
      const tileIndex = generatedTiles.findIndex((tile) => tile.id === currId);
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
    newTiles.map((tile) => (tile.selected = false));
    setGeneratedTiles(newTiles);
    setTileSelected({ id: null, selected: false });
  };

  const checkSolution = () => {
    // tiles are saved in an array indexed from 0 to n (6) and displayed in that order
    // first condition checks if tile's id is equal to its index in the array and returns false/true
    // since initial acc value is true, second condition checks if prev value is true and keeps its value
    const isCorrect = generatedTiles.reduce((acc, curr, i) => {
      if (curr.id !== i) {
        return false;
      } else if (acc === true) {
        return acc;
      }
    }, true);
    setIsSolved(isCorrect);
  };

  return (
    <Col className="puzzlePage__puzzleBox__currentImage">
      {!isSolved
        ? generatedTiles.map((tile) => {
            return (
              <Row
                key={"tileNumber" + tile.id}
                className={tile.selected ? "selectedTile" : ""}
                onClick={() => handleSelect(tile.id)}
              >
                {tile.id}
              </Row>
            );
          })
        : "You solved it!"}
    </Col>
  );
};

export default CurrentImage;
