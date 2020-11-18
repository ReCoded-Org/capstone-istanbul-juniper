import React from "react";
import renderer from "react-test-renderer";
import Resource from ".";

it("Resource renders correctly", () => {
  const tree = renderer.create(<Resource />).toJSON();
  expect(tree).toMatchSnapshot();
});
