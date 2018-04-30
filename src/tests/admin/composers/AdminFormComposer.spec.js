import React from "react";
import { mount } from "enzyme";
import AdminFormComposer from "../../../bundles/admin/composers/AdminFormComposer";

const closeDialog = jest.fn();

const Dialog = {
  close: closeDialog
};

const EmptyComponent = () => null;
const EnhancedComponent = AdminFormComposer(props => (
  <EmptyComponent {...props} />
));

describe("AdminFormComposer", () => {
  let wrapper;
  let enhancedComponent;

  beforeEach(() => {
    wrapper = mount(<EnhancedComponent Dialog={Dialog} />);
    enhancedComponent = wrapper.find(EmptyComponent);
  });

  test("it should return the default formData of empty name and email", () => {
    const { formData } = enhancedComponent.props();
    expect(formData).toEqual({ name: "", email: "" });
  });

  test("it should update the formData when call setFormData", () => {
    const { setFormData } = enhancedComponent.props();
    const admin = {
      name: "Sample Admin",
      email: "sampleAdmin@example.com"
    };
    setFormData(admin);

    wrapper.update();
    expect(wrapper.find(EmptyComponent).props().formData).toEqual(admin);
  });

  test("it should return the default formErrors of empty name and email", () => {
    const { formErrors } = enhancedComponent.props();
    expect(formErrors).toEqual({ name: "", email: "" });
  });

  test("it should update the formErrors when call setFormErrors", () => {
    const { setErrors } = enhancedComponent.props();
    const adminError = {
      name: "Must be present",
      email: "Must be present"
    };
    setErrors(adminError);

    wrapper.update();
    expect(wrapper.find(EmptyComponent).props().formErrors).toEqual(adminError);
  });

  test("it should call Dialog.close when handleClose is called", () => {
    const { handleClose } = enhancedComponent.props();
    handleClose();
    expect(closeDialog.mock.calls.length).toBe(1);
  });

  test("it should call the mutate function when call handleSave", () => {
    const { handleSave, setFormData, mutate } = enhancedComponent.props();
    const admin = {
      name: "admin1",
      email: "admin1@eg.com"
    };
    setFormData(admin);
    handleSave();
    wrapper.update();
    expect(mutate.mock.calls.length).toBe(1);
  })
});
