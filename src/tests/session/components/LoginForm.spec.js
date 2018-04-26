import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { Button } from "antd";
import LoginForm from "../../../bundles/session/components/LoginForm";

const handleSave = jest.fn();
const setFormData = jest.fn();

const props = {
  handleSave,
  setFormData,
  formData: {
    email: "",
    password: ""
  }
};

describe("LoginForm", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(
      <MemoryRouter>
        <LoginForm {...props} />
      </MemoryRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Login Form elements", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<LoginForm {...props} />);
    });

    describe("Filling and submitting form", () => {
      beforeEach(() => {
        wrapper = shallow(<LoginForm {...props} />);
      });

      afterEach(() => {
        setFormData.mockClear();
      });

      test("it should call the setFormData function when changing the email field", () => {
        const emailField = wrapper.find("#email-field");
        emailField.simulate("change", { target: { value: "bb@bb.com" } });
        const args = setFormData.mock.calls[0][0];
        expect(setFormData.mock.calls.length).toBe(1);
        expect(args).toEqual({ email: "bb@bb.com", password: "" });
      });

      test("it should call the setFormData function when changing the password field", () => {
        const passwordField = wrapper.find("#password-field");
        passwordField.simulate("change", { target: { value: "secret" } });
        const args = setFormData.mock.calls[0][0];
        expect(setFormData.mock.calls.length).toBe(1);
        expect(args).toEqual({ email: "", password: "secret" });
      });

      test("it should call the handleSave when the button is clicked", () => {
        const button = wrapper.find(Button);
        button.simulate("click");
        expect(handleSave.mock.calls.length).toBe(1);
      });
    });
  });
});
