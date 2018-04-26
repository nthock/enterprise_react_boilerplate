import React from "react";
import { mount } from "enzyme";
import { LoginFormComposer } from "../../../bundles/session/composers/LoginFormComposer";

const historyPush = jest.fn();

const history = {
  push: historyPush
};

const EmptyComponent = () => null;
const EnhancedComponent = LoginFormComposer(props => (
  <EmptyComponent {...props} />
));

describe("LoginFormComposer", () => {
  let wrapper;
  let enhancedComponent;

  beforeEach(() => {
    wrapper = mount(<EnhancedComponent history={history} />);
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

  test("it should call the mutate function when call handleSave", () => {
    const { handleSave, setFormData, mutate } = enhancedComponent.props();
    const userLogin = {
      email: "user1@eg.com",
      password: "secret"
    };
    setFormData(userLogin);
    handleSave();
    wrapper.update();
    expect(mutate.mock.calls.length).toBe(1);
  });
});
