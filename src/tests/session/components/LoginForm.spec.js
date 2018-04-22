import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
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
  const FormItem = Form.Item;

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginForm {...props} />);
  });

  test("it should render one Form component", () => {
    expect(wrapper.find(Form).length).toEqual(1);
  });

  test("it should have 3 FormItems", () => {
    expect(wrapper.find(FormItem).length).toEqual(3);
  });

  test("it should have 2 inputs", () => {
    expect(wrapper.find(Input).length).toEqual(2);
  });

  test("it should have one log in button", () => {
    const button = wrapper.find(Button);
    expect(button.length).toEqual(1);
    expect(button.html()).toContain("Log in");
  });

  describe("Form Footer", () => {
    let footer;
    beforeEach(() => {
      footer = wrapper.find(".form-footer");
    });

    test("it should contain 2 links in the form footer", () => {
      expect(footer.find(Link).length).toEqual(2);
    });

    test("the first link should contain forget password and link to /forget_password", () => {
      const forgetPasswordLink = footer.find(Link).first();
      expect(forgetPasswordLink.props().to).toEqual("/forget_password");
      expect(forgetPasswordLink.props().children).toEqual("Forgot password?");
    });

    test("the second link should link to /signup", () => {
      const signUpPageLink = footer.find(Link).last();
      expect(signUpPageLink.props().to).toEqual("/signup");
      expect(signUpPageLink.props().children).toEqual(
        "Do not have account? Sign up here"
      );
    });
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
