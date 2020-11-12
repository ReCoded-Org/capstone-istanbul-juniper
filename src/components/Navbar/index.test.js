import React from "react";
import renderer from "react-test-renderer";
import Navbar from "./index";

describe("Navbar Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
