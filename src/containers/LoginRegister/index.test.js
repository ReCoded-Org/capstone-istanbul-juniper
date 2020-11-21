import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import LoginRegisterPage from ".";

describe("LoginRegisterPage Component", () => {
  it("matches the tree", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <LoginRegisterPage />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
