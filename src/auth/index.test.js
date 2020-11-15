import React from "react";
import renderer from "react-test-renderer";
import AuthProvider from "./authContext";

it("AuthProvider renders correctly", () => {
  const tree = renderer.create(<AuthProvider />).toJSON();
  expect(tree).toMatchSnapshot();
});
