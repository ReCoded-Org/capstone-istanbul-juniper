import React from "react";
import "../../../matchMedia";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import GamesPageImageGrid from ".";

const MOCK_GAME_DATA = {
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
        <GamesPageImageGrid gameData={MOCK_GAME_DATA} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
