import React from "react";
import ContactUsHeaderSection from "./index.jsx";
import renderer from "react-test-renderer";

it("ContactUsHeaderSection snapshot test", () => {
  const tree = renderer.create(<ContactUsHeaderSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
