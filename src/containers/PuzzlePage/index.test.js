import React from "react";
import PuzzlePage from "./index.jsx";
import renderer from "react-test-renderer";

describe("PuzzlePage Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<PuzzlePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
