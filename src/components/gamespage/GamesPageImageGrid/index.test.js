import React from "react";
import "../../../matchMedia";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import GamesPageImageGrid from ".";

const gameData = {
  testGame: {
    imgSrc: "testUrl",
    route: "testRoute",
    gameTitle: "testTitle",
  },
};

it("GamesPageImageGrid renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <GamesPageImageGrid gameData={gameData} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
