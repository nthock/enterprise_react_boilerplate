import React from "react";
import renderer from "react-test-renderer";
import SignUpContainer from "../../../bundles/user/containers/SignUpContainer";

const history = {
  go: () => {},
  push: () => {}
};

describe("SignUpContainer", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(<SignUpContainer history={history} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
