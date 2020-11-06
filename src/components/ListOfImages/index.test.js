import React from "react";
import ListOfImages from "./index.jsx";
import renderer from "react-test-renderer";

describe("ListOfImages Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<ListOfImages />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
