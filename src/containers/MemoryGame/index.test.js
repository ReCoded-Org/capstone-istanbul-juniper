import React from "react";
import "../../matchMedia";
import renderer from "react-test-renderer";
import MemoryGame from ".";

it("MemoryGame renders correctly", () => {
  const tree = renderer.create(<MemoryGame />).toJSON();
  expect(tree).toMatchSnapshot();
});
