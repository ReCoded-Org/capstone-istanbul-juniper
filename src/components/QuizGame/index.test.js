import React from "react";
import QuizGame from "./index.jsx";
import renderer from "react-test-renderer";

it("QuizGame snapshot test", () => {
  const tree = renderer.create(<QuizGame/>).toJSON();
  expect(tree).toMatchSnapshot();
});
