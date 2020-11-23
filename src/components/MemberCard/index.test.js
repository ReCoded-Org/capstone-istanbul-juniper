import React from "react";
import renderer from "react-test-renderer";
import MemberCard from ".";

it("MemberCard renders correctly", () => {
  const tree = renderer.create(<MemberCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
