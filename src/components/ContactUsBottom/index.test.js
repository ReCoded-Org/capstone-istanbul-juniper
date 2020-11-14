import React from "react";
import ContactUsBottom from "./index.jsx";
import renderer from "react-test-renderer";

it("ContactUsBottom snapshot test", () => {
  const tree = renderer.create(<ContactUsBottom />).toJSON();
  expect(tree).toMatchSnapshot();
});
