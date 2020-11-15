import React from "react";
import renderer from "react-test-renderer";
import GamesPage from "./index";

describe("GamesPage Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GamesPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
