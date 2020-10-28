import React from "react";
import HomePageHeaderSection from "./index.jsx";
import renderer from "react-test-renderer";

it("first snapshot test", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
