import React from "react";
import renderer from "react-test-renderer";
import { ForgetPasswordContainer } from "../../../bundles/user/containers/ForgetPasswordContainer";

const history = {
  go: () => {},
  push: () => {}
};

const handleSave = jest.fn();
const setFormData = jest.fn();

const props = {
  handleSave,
  setFormData,
  formData: {
    email: ""
  },
  formErrors: {
    email: ""
  }
};

describe("ForgetPasswordContainer", () => {
  describe("when submit is false", () => {
    test("it should match snapshot", () => {
      const component = renderer.create(
        <ForgetPasswordContainer history={history} submit={false} {...props} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("when submit is true", () => {
    test("it should match snapshot", () => {
      const component = renderer.create(
        <ForgetPasswordContainer history={history} submit {...props} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
