import React from "react";
import renderer from "react-test-renderer";
import GamesPageProgressSection from "./index";

const MOCK_PROGRESS_DATA = {
  currentLevel: 1,
  currentXP: 50,
  prevRewardIcon: "",
  prevRewardDescription: "test",
  badgeName: "test",
};

describe("GamesPageProgressSection Component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<GamesPageProgressSection progressData={MOCK_PROGRESS_DATA} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
