import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
// import { setMockGraphQLProps } from "react-apollo";
import AdminListComposer from "../../../bundles/admin/composers/AdminListComposer";

const EmptyComponent = () => null;
const EnhancedComponent = AdminListComposer(props => (
  <EmptyComponent {...props} />
));

describe("when admins are fetched", () => {
  test("it should match snapshot", () => {
    const wrapper = mount(<EnhancedComponent />);
    const enhancedComponent = wrapper.find(EmptyComponent);
    expect(enhancedComponent.props()).toMatchSnapshot();
  });

  test("it should rendered the 2 admins", () => {
    const wrapper = mount(<EnhancedComponent />);
    const enhancedComponent = wrapper.find(EmptyComponent);
    const adminList = enhancedComponent.props().data;
    expect(adminList.admins.length).toEqual(2);
  });
});
