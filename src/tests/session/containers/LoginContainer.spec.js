import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { LoginContainer } from "../../../bundles/session/containers";
import { LoginFormComposer as LoginForm } from "../../../bundles/session/composers";

const history = {
  go: () => {},
  push: () => {}
};

test("it should match snapshot", () => {
  const component = renderer.create(
    <MemoryRouter>
      <LoginContainer history={history} />
    </MemoryRouter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("it should have the h1 element with the name 'Log in'", () => {
  const wrapper = shallow(<LoginContainer history={history} />);
  expect(wrapper.find("h1").text()).toEqual("Log in");
});

test("it should contain the LoginFormComposer as LoginForm", () => {
  const wrapper = shallow(<LoginContainer history={history} />);
  expect(wrapper.find(LoginForm).length).toEqual(1);
});
