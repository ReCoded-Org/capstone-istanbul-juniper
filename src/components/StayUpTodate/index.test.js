import React from "react";
import "../../matchMedia";
import renderer from "react-test-renderer";
import StayUpToDate from ".";

it("StayUpToDate renders correctly", () => {
  const tree = renderer.create(<StayUpToDate />).toJSON();
  expect(tree).toMatchSnapshot();
});
