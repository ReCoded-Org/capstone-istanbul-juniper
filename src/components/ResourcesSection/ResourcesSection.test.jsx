import React from "react";
import renderer from "react-test-renderer";
import ResourcesSection from ".";
import { BrowserRouter as Router } from "react-router-dom";

it("ResourcesSection renders correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <ResourcesSection />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
