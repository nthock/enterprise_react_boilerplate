import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { Button } from "antd";
import { AdminList } from "../../../bundles/admin/components/AdminList";
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

  test("should call handleDelete when clicked on the delete admin button", () => {
    const wrapper = mount(<AdminList {...props} />);
    const deleteButton = wrapper.find("#delete-admin-1").first();
    deleteButton.simulate("click");
    expect(handleDelete.mock.calls.length).toBe(1);
  });

  test("should call sendInvite when clicked on the invite admin button", () => {
    const wrapper = mount(<AdminList {...props} />);
    const sendInviteButton = wrapper.find("#invite-admin-2").first();
    sendInviteButton.simulate("click");
    expect(sendInvite.mock.calls.length).toBe(1);
  });
});
