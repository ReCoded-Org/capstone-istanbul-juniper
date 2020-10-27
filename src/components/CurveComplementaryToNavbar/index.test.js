import React from "react";
import renderer from "react-test-renderer";
import CurveComplementaryToNavbar from ".";

it("CurveComplementaryToNavbar renders correctly", () => {
  const tree = renderer.create(<CurveComplementaryToNavbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
