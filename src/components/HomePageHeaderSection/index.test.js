import React from "react";
import HomePageHeaderSection from "./index.jsx";
import renderer from "react-test-renderer";

it("HomePageHeaderSection snapshot test", () => {
  const tree = renderer.create(<HomePageHeaderSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
