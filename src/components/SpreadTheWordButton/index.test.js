import React from "react";
import renderer from "react-test-renderer";
import SpreadTheWordButton from ".";

it("SpreadTheWordButton renders correctly", () => {
  const tree = renderer.create(<SpreadTheWordButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
