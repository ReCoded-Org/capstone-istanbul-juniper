import React from "react";
import NetlifyForm from "./index.jsx";
import renderer from "react-test-renderer";

it("NetlifyForm snapshot test", () => {
  const tree = renderer.create(<NetlifyForm />).toJSON();
  expect(tree).toMatchSnapshot();
});