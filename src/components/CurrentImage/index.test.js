import React from "react";
import CurrentImage from "./index.jsx";
import renderer from "react-test-renderer";

describe("CurrentImage Component", () => {
  it("matchess the tree", () => {
    const tree = renderer.create(<CurrentImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
