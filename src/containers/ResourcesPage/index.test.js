import React from "react";
import renderer from "react-test-renderer";
import ResourcesPage from ".";

it("ResourcesPage renders correctly", () => {
  const tree = renderer.create(<ResourcesPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
