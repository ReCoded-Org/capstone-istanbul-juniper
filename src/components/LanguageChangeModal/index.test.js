import React from "react";
import renderer from "react-test-renderer";
import LanguageChangeModal from ".";

describe("LanguageChangeModal Component", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<LanguageChangeModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
