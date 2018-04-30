import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import SignUpForm from "../../../bundles/user/components/SignUpForm";

const handleSave = jest.fn();
const setFormData = jest.fn();

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

describe("SignUpForm", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(
      <MemoryRouter>
        <SignUpForm {...props} />
      </MemoryRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
