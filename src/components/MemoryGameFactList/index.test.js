import React from "react";
import "../../matchMedia";
import renderer from "react-test-renderer";
import MemoryGameFactList from ".";

it("MemoryGameFactList renders correctly", () => {
  const tree = renderer.create(<MemoryGameFactList />).toJSON();
  expect(tree).toMatchSnapshot();
});
