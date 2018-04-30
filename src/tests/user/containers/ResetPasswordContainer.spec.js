import React from "react";
import renderer from "react-test-renderer";
import { ResetPasswordContainer } from "../../../bundles/user/containers/ResetPasswordContainer";

const handleSave = jest.fn();
const setFormData = jest.fn();

const props = {
  handleSave,
  setFormData,
  formData: {
    password: "",
    password_confirmation: ""
  },
  formErrors: {
    password: "",
    password_confirmation: ""
  }
};

describe("ResetPasswordContainer", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(<ResetPasswordContainer {...props} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
