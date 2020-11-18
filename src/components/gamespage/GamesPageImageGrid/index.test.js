import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import GamesPageImageGrid from "./index";

describe("GamesPageImageGrid Component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <GamesPageImageGrid />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
