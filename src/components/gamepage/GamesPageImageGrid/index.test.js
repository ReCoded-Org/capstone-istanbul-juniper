import React from "react";
import renderer from "react-test-renderer";
import GamesPageImageGrid from "./index";

describe("GamesPageImageGrid Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GamesPageImageGrid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
