import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import AdminList from "../../../bundles/admin/components/AdminList";
import { adminList } from "../../../../__mocks__/mockData";

const handleDelete = jest.fn();
const sendInvite = jest.fn();

const props = {
  data: adminList,
  handleDelete,
  sendInvite,
  formData: {
    name: "",
    email: ""
  },
  formErrors: {
    name: "",
    email: ""
  }
};

describe("AdminList", () => {
  test("it should match snapshot", () => {
    const component = renderer.create(
      <MemoryRouter>
        <AdminList {...props} />
      </MemoryRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
