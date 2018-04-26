import React from "react";
import renderer from "react-test-renderer";
import { AcceptInvitationContainer } from "../../../bundles/user/containers/AcceptInvitationContainer";

const history = {
  go: () => {},
  push: () => {}
};

const handleSave = jest.fn();
const setFormData = jest.fn();
const submit = jest.fn();

const props = {
  handleSave,
  setFormData,
  submit,
  formData: {
    password: "",
    password_confirmation: ""
  },
  formErrors: {
    password: "",
    password_confirmation: ""
  }
};

describe("ForgetPasswordContainer", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(
      <AcceptInvitationContainer history={history} {...props} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
