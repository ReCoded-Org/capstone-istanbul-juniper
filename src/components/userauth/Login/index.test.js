import React from "react";
import Login from "./index.jsx";
import renderer from "react-test-renderer";

describe("Login Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
