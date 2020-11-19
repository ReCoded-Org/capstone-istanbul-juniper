import React from "react";
import renderer from "react-test-renderer";
import GamesPageProgressSection from "./index";

describe("GamesPageProgressSection Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GamesPageProgressSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
