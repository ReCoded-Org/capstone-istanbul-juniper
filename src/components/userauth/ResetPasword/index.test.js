import React from "react";
import renderer from "react-test-renderer";
import ResetPassword from ".";

describe("ResetPassword Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<ResetPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
