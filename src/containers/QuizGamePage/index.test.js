import React from "react";
import QuizGamePage from "./index.jsx";
import renderer from "react-test-renderer";

describe("Quiz game page Container", () => {
  it("matches the tree", () => {
    const tree = renderer.create(<QuizGamePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
