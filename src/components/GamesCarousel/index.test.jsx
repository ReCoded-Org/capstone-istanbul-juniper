import Item from "antd/lib/list/Item";
import React from "react";
import renderer from "react-test-renderer";
import GamesCarousel from "./index.jsx";

it("renders correctly", () => {
  const tree = renderer.create(<GamesCarousel />).toJSON();
  expect(tree).toMatchSnapshot();
});
