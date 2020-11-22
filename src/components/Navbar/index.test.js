import React from "react";
import Navbar from "./index.jsx";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar Component", () => {
  it("matches the tree", () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
