import React from "react";
import renderer from "react-test-renderer";
import ErrorMessage from ".";

it("ErrorMessage snapshot test", () => {
  const tree = renderer.create(<ErrorMessage />).toJSON();
  expect(tree).toMatchSnapshot();
});
