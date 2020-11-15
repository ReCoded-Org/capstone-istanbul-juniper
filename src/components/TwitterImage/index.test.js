import React from "react";
import renderer from "react-test-renderer";
import TwitterImage from ".";

it("TwitterImage renders correctly", () => {
  const tree = renderer.create(<TwitterImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
