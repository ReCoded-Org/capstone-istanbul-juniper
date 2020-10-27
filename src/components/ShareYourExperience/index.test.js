import React from "react";
import renderer from "react-test-renderer";
import ShareYourExperience from ".";

it("ShareYourExperience button renders correctly", () => {
  const tree = renderer.create(<ShareYourExperience />).toJSON();
  expect(tree).toMatchSnapshot();
});
