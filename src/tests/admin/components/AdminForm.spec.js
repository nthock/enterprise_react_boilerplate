import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { AdminForm } from "../../../bundles/admin/components/AdminForm";

const handleSave = jest.fn();
const setFormData = jest.fn();
const handleClose = jest.fn();

const props = {
  handleSave,
  handleClose,
  setFormData,
  formData: {
    name: "",
    email: ""
  },
  formErrors: {
    name: "",
    email: ""
  }
};

describe("AdminForm", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(<AdminForm {...props} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Filling in and submitting the form", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<AdminForm {...props} />);
    });

    afterEach(() => {
      setFormData.mockClear();
    });

    test("it should call the setFormData function when changing the email field", () => {
      const emailField = wrapper.find("#emailField");
      emailField.simulate("change", { target: { value: "bb@bb.com" } });
      const args = setFormData.mock.calls[0][0];
      expect(setFormData.mock.calls.length).toBe(1);
      expect(args).toEqual({ email: "bb@bb.com", name: "" });
    });

    test("it should call the setFormData function when changing the name field", () => {
      const namefield = wrapper.find("#nameField");
      namefield.simulate("change", { target: { value: "Sample User" } });
      const args = setFormData.mock.calls[0][0];
      expect(setFormData.mock.calls.length).toBe(1);
      expect(args).toEqual({ name: "Sample User", email: "" });
    });

    test("it should call the handleSave when the Create Admin button is clicked", () => {
      const button = wrapper.find("#addAdminBtn");
      button.simulate("click");
      expect(handleSave.mock.calls.length).toBe(1);
    });

    test("it should call the handleClose when the Cancel button is clicked", () => {
      const button = wrapper.find("#closeAdminModal");
      button.simulate("click");
      expect(handleClose.mock.calls.length).toBe(1);
    });
  });
});
