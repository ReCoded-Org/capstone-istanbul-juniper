import React from "react";
import HomePageHeaderSection from "./index.jsx";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

it("HomePageHeaderSection snapshot test", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <HomePageHeaderSection />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
