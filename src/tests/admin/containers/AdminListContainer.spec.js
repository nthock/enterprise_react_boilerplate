import React from "react";
import renderer from "react-test-renderer";
import { AdminListContainer } from "../../../bundles/admin/containers";

const history = {
  go: () => {},
  push: () => {}
};

const Dialog = {};

test("it should match snapshot", () => {
  const component = renderer.create(
    <AdminListContainer history={history} Dialog={Dialog} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
