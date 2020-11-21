import React from "react";
import renderer from "react-test-renderer";
import PasswordReset from "./index.jsx";

describe("PasswordReset Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<PasswordReset />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
