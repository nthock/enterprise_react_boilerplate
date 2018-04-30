import React from "react";
import renderer from "react-test-renderer";
import { Loader } from "../../shared";

describe("Loader", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(<Loader />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
