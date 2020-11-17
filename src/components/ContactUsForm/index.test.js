import React from "react";
import ContactUsForm from "./index.jsx";
import renderer from "react-test-renderer";

it("ContactUsForm snapshot test", () => {
  const tree = renderer.create(<ContactUsForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
