import React from "react";
import VideoBg from "./VideoBg";
import renderer from "react-test-renderer";

it("renders properly", () => {
  const tree = renderer.create(<VideoBg />).toJSON();
  expect(tree).toMatchSnapshot();
});
