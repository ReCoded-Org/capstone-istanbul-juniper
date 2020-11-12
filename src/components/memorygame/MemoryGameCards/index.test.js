import React from "react";
import "../../../matchMedia";
import renderer from "react-test-renderer";
import MemoryGameCards from "./index";

jest.mock("react-i18next");
it("MemoryGameCards renders correctly", () => {
  const tree = renderer.create(<MemoryGameCards />).toJSON();
  expect(tree).toMatchSnapshot();
});
