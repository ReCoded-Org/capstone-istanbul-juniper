import React from "react";
import renderer from "react-test-renderer";
import TeamCards from ".";

it("TeamCards renders correctly", () => {
  const tree = renderer.create(<TeamCards />).toJSON();
  expect(tree).toMatchSnapshot();
});
