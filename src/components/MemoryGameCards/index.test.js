import React from "react";
import "../../matchMedia";
import renderer from "react-test-renderer";
import MemoryGameCards from ".";

it("MemoryGameCards renders correctly", () => {
  const tree = renderer.create(<MemoryGameCards />).toJSON();
  expect(tree).toMatchSnapshot();
});
