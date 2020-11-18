import React from "react";
import AboutPage from "./index.jsx";
import renderer from "react-test-renderer";

describe("AboutPage Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<AboutPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
