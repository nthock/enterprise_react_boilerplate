import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import { Navigation } from "../../shared";
import { user } from "../../../__mocks__/mockData";

describe("Navigation", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(
      <MemoryRouter>
        <Navigation currentUser={user}>
          <div>Dummy Content</div>
        </Navigation>
      </MemoryRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
