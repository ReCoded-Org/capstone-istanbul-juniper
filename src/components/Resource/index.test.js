import React from "react";
import renderer from "react-test-renderer";
import Resource from "./index.jsx";

it("Resource renders correctly", () => {
  const tree = renderer.create(<Resource />).toJSON();
  expect(tree).toMatchSnapshot();
});
