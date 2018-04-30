import React from "react";
import renderer from "react-test-renderer";
import { Dialog } from "../../shared";

describe("Dialog", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(
      <Dialog>
        <div>Dummy Content</div>
      </Dialog>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
