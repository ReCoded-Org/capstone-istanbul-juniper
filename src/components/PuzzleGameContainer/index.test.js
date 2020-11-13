import React from "react";
import PuzzleGameContainer from "./index.jsx";
import renderer from "react-test-renderer";

describe("PuzzleGameContainer Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<PuzzleGameContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
