import React from "react";
import renderer from "react-test-renderer";
import GamesPageProgressSection from ".";

it("GamesPageProgressSection renders correctly", () => {
  const tree = renderer.create(<GamesPageProgressSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
