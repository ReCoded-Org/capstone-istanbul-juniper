import React from "react";
import renderer from "react-test-renderer";
import Register from ".";

describe("Register Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
