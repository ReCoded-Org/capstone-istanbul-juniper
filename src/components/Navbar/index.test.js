import React from "react";
import Navbar from "./index.jsx";
import renderer from "react-test-renderer";

// const renderer = require('react-test-renderer');
describe("Navbar Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
