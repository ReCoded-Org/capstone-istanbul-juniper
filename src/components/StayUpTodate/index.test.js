import React from "react";
import renderer from "react-test-renderer";
import StayUpToDate from ".";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

it("StayUpToDate renders correctly", () => {
  const tree = renderer.create(<StayUpToDate />).toJSON();
  expect(tree).toMatchSnapshot();
});
