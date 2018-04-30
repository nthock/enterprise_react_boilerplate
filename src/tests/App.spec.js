import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import App from "../App";

describe("AcceptInvitationContainer", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
