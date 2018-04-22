import React from "react";
import { mount } from "enzyme";
import { LoginFormComposer } from "../../../bundles/session/composers/LoginFormComposer";

const EmptyComponent = () => null;
const EnhancedComponent = LoginFormComposer(props => (
  <EmptyComponent {...props} />
));

describe("LoginFormComposer", () => {
  let wrapper;
  let enhancedComponent;

  beforeEach(() => {
    wrapper = mount(<EnhancedComponent />);
    enhancedComponent = wrapper.find(EmptyComponent);
  });

  test("it should return the default formData of empty email and password", () => {
    const { formData } = enhancedComponent.props();
    expect(formData).toEqual({ email: "", password: "" });
  });

  test("it should update the formData when call setFormData", () => {
    const { setFormData } = enhancedComponent.props();
    const userLogin = {
      email: "bb@bb.com",
      password: "secret"
    };
    setFormData(userLogin);

    wrapper.update();
    expect(wrapper.find(EmptyComponent).props().formData).toEqual(userLogin);
  });

  // test("it should match snapshot for handleSave", () => {
  //   const { handleSave, setFormData } = enhancedComponent.props();
  //   const userLogin = {
  //     email: "bb@bb.com",
  //     password: "secret"
  //   };
  //   setFormData(userLogin);
  //   handleSave();
  //   wrapper.update();
  // });
});
