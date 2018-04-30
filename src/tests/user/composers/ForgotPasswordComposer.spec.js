import React from "react";
import { mount } from "enzyme";
import ForgotPasswordComposer from "../../../bundles/user/composers/ForgotPasswordComposer";

const EmptyComponent = () => null;
const EnhancedComponent = ForgotPasswordComposer(props => (
  <EmptyComponent {...props} />
));

describe("ForgotPasswordComposer", () => {
  let wrapper;
  let enhancedComponent;

  beforeEach(() => {
    wrapper = mount(<EnhancedComponent />);
    enhancedComponent = wrapper.find(EmptyComponent);
  });

  test("it should return the default formData of empty email", () => {
    const { formData } = enhancedComponent.props();
    expect(formData).toEqual({
      email: ""
    });
  });

  test("it should update the formData when call setFormData", () => {
    const { setFormData } = enhancedComponent.props();
    const userForgotPassword = {
      email: "bb@bb.com"
    };
    setFormData(userForgotPassword);

    wrapper.update();
    expect(wrapper.find(EmptyComponent).props().formData).toEqual(
      userForgotPassword
    );
  });

  test("it should return the default formErrors of empty name, email, pw and pw confirmation", () => {
    const { formErrors } = enhancedComponent.props();
    expect(formErrors).toEqual({
      email: ""
    });
  });

  test("it should update the formData when call setFormData", () => {
    const { setFormErrors } = enhancedComponent.props();
    const userForgotPasswordError = {
      email: "must be present"
    };
    setFormErrors(userForgotPasswordError);

    wrapper.update();
    expect(wrapper.find(EmptyComponent).props().formErrors).toEqual(
      userForgotPasswordError
    );
  });

  test("it should set the formError when the email is invalid", () => {
    const { handleSave, setFormData } = enhancedComponent.props();
    setFormData({ email: "bbbbb" });
    wrapper.update();
    handleSave();
    wrapper.update();
    expect(wrapper.find(EmptyComponent).props().formErrors).toEqual({
      email: "Invalid Email"
    });
  });

  test("it should call the mutate function when call handleSave", () => {
    const { handleSave, setFormData, mutate } = enhancedComponent.props();
    const user = {
      email: "bb@bb.com"
    };
    setFormData(user);
    handleSave();
    wrapper.update();
    expect(mutate.mock.calls.length).toBe(1);
  });
});
