import React from "react";
import { mount } from "enzyme";
import { compose, withProps } from "recompose";
import AdminListComposer from "../../../bundles/admin/composers/AdminListComposer";
import { adminListQuery } from "../../../bundles/admin/graphql";
import getData from "../../../helpers/getData";

jest.mock("../../../helpers/getData");

const resp = Component => props => (
  <Component {...props} />
);
getData.mockImplementation(resp);

// const EmptyComponent = () => null;
// const EnhancedComponent = AdminListComposer(props => (
//   <EmptyComponent {...props} />
// ));

describe("AdminListComposer", () => {
  test("blah blah", () => {
    // const resp = (Component) => {
    //   const data = {data: {name: 'Bob'}}
    //   return <Component data={data} />;
    // };
    // const resp = compose(
    //   withProps({ data: { name: 'Bob' } })
    // );
    // getData.mockImplementation(resp);
    // getData.mockResolvedValue(resp);
    console.log(getData(adminListQuery));

    // const wrapper = mount(
    //   <EnhancedComponent />
    // );
    //
    // console.log(wrapper.find(EmptyComponent).props());
    // const enhancedComponent = wrapper.find(EmptyComponent);
    // console.log(enhancedComponent.props());
  })
});
