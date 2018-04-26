import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import AdminForm from "../../../bundles/admin/components/AdminForm";

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
    const component = renderer.create(
      <MemoryRouter>
        <AdminForm {...props} />
      </MemoryRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
