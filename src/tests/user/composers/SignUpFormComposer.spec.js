import React from "react";
import { mount } from "enzyme";
import SignUpFormComposer from "../../../bundles/user/composers/SignUpFormComposer";

const historyPush = jest.fn();

const history = {
  push: historyPush
};

const EmptyComponent = () => null;
const EnhancedComponent = SignUpFormComposer(props => (
  <EmptyComponent {...props} />
));

describe("SignUpFormComposer", () => {
  let wrapper;
  let enhancedComponent;

  beforeEach(() => {
    wrapper = mount(<EnhancedComponent history={history} />);
    enhancedComponent = wrapper.find(EmptyComponent);
  });

  test("it should return the default formData of empty name, email, pw and pw confirmation", () => {
    const { formData } = enhancedComponent.props();
    expect(formData).toEqual({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
  });

  test("it should update the formData when call setFormData", () => {
    const { setFormData } = enhancedComponent.props();
    const userSignUp = {
      name: "bob",
      email: "bb@bb.com",
      password: "secret",
      password_confirmation: "secret"
    };
    setFormData(userSignUp);

    wrapper.update();
    expect(wrapper.find(EmptyComponent).props().formData).toEqual(userSignUp);
  });

  test("it should return the default formErrors of empty name, email, pw and pw confirmation", () => {
    const { formErrors } = enhancedComponent.props();
    expect(formErrors).toEqual({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
  });

  test("it should update the formData when call setFormData", () => {
    const { setFormErrors } = enhancedComponent.props();
    const userSignUpErrors = {
      name: "must be present",
      email: "must be present",
      password: "must be present",
      password_confirmation: "must be present"
    };
    setFormErrors(userSignUpErrors);

    wrapper.update();
    expect(wrapper.find(EmptyComponent).props().formErrors).toEqual(
      userSignUpErrors
    );
  });

  test("it should call the mutate function when call handleSave", () => {
    const { handleSave, setFormData, mutate } = enhancedComponent.props();
    const user = {
      name: "bob",
      email: "bb@bb.com",
      password: "secret",
      password_confirmation: "secret"
    };
    setFormData(user);
    handleSave();
    wrapper.update();
    expect(mutate.mock.calls.length).toBe(1);
  });
});
