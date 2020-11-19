import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import GamesPage from ".";

describe("GamesPage Component", () => {
  it("matches the tree", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <GamesPage />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
