import React from "react";
import QuizGame from "./index.jsx";
import renderer from "react-test-renderer";

it("Quiz Game snapshot test", () => {
  const tree = renderer.create(<QuizGame />).toJSON();
  expect(tree).toMatchSnapshot();
});
