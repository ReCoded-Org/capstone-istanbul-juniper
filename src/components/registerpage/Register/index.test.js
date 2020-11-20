import React from "react";
import Register from "./index.jsx";
import renderer from "react-test-renderer";

describe("Register Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
