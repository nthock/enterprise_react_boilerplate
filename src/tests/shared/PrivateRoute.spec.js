import React from "react";
import renderer from "react-test-renderer";
import { PrivateRoute } from "../../shared";

describe("PrivateRoute", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(
      <PrivateRoute path="/dashboard" component={() => <div>Dummy</div>} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
