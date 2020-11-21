import React from "react";
import renderer from "react-test-renderer";
import Login from ".";

describe("Login Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
