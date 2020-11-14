import React from "react";
import "../../matchMedia";
import renderer from "react-test-renderer";
import MatchingGameHeaderSection from ".";

it("MatchingGameCards renders correctly", () => {
  const tree = renderer.create(<MatchingGameHeaderSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
