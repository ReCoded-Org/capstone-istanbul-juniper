import React from "react";
import PuzzleGrid from "./index.jsx";
import renderer from "react-test-renderer";

describe("PuzzleGrid Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<PuzzleGrid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
