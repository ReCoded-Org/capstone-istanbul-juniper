import React from "react";
import PuzzleSpace from "./index.jsx";
import renderer from "react-test-renderer";

describe("PuzzleSpace Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<PuzzleSpace />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
