import React from "react";
import renderer from "react-test-renderer";
import ResourcesSection from ".";

it("ResourcesSection renders correctly", () => {
  const tree = renderer.create(<ResourcesSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
