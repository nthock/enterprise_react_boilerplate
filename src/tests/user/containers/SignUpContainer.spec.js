import React from "react";
import renderer from "react-test-renderer";
import SignUpContainer from "../../../bundles/user/containers/SignUpContainer";

const handleSave = jest.fn();
const setFormData = jest.fn();

const history = {
  go: () => {},
  push: () => {}
};

const props = {
  handleSave,
  setFormData,
  formData: {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  },
  formErrors: {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }
};

test("it should match snapshot", () => {
  const component = renderer.create(
    <SignUpContainer history={history} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
