import React from "react";
import Source from "./Source";
import renderer from "react-test-renderer";

it("renders properly", () => {
  const tree = renderer.create(<Source src="src" type="type" />).toJSON();
  expect(tree).toMatchSnapshot();
});
