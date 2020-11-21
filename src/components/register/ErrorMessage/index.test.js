import React from "react";
import ErrorMessage from "./index.jsx";
import renderer from "react-test-renderer";

it("ErrorMessage snapshot test", () => {
  const tree = renderer.create(<ErrorMessage />).toJSON();
  expect(tree).toMatchSnapshot();
});
