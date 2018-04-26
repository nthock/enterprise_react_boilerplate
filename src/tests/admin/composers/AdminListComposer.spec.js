import React from "react";
import { mount } from "enzyme";
import { setMockGraphQLErrorProps } from "react-apollo";
import AdminListComposer from "../../../bundles/admin/composers/AdminListComposer";

const EmptyComponent = () => null;
const EnhancedComponent = AdminListComposer(props => (
  <EmptyComponent {...props} />
));

describe("adminListComposer", () => {
  let wrapper;
  let enhancedComponent;

  beforeEach(() => {
    wrapper = mount(<EnhancedComponent />);
    enhancedComponent = wrapper.find(EmptyComponent);
  });

  describe("when admins are fetched successfully", () => {
    test("it should match snapshot", () => {
      expect(enhancedComponent.props()).toMatchSnapshot();
    });

    test("it should rendered the 2 admins", () => {
      const adminList = enhancedComponent.props().data;
      expect(adminList.admins.length).toEqual(2);
    });

    test("it should call the mocked function sendInviteMutate", () => {
      const {
        sendInvite,
        sendInviteMutate,
        data: { admins }
      } = enhancedComponent.props();
      sendInvite(admins[0].id);
      expect(sendInviteMutate.mock.calls.length).toBe(1);
    });
  });

  describe("when there is an error in fetching admins", () => {
    test("it should match snapshot", () => {
      setMockGraphQLErrorProps(true);
      const errorWrapper = mount(<EnhancedComponent />);
      const errorEnhancedComponent = errorWrapper.find(EmptyComponent);
      expect(errorEnhancedComponent.props()).toMatchSnapshot();
    });
  });
});
