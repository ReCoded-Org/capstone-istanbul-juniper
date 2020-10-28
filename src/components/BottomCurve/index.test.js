import React from "react";
import renderer from "react-test-renderer";
import BottomCurve from ".";

it("BottomCurve renders correctly", () => {
  const tree = renderer.create(<BottomCurve />).toJSON();
  expect(tree).toMatchSnapshot();
});
