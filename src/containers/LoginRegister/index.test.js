import React from "react";
import LoginRegisterPage from "./index.jsx";
import renderer from "react-test-renderer";

describe("LoginRegisterPage Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<LoginRegisterPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
