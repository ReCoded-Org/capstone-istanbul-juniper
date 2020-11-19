import React from "react";
import PasswordReset from "./index.jsx";
import renderer from "react-test-renderer";

describe("PasswordReset Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<PasswordReset />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
