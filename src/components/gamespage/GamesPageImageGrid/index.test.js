import React from "react";
import "../../../matchMedia";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import GamesPageImageGrid from ".";
import { gameData } from "../../../containers/GamesPage";

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
