```javascript
import React from "react";
import { mount } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";
import { authenticateUser } from "../../../bundles/session/graphql";
import { LoginFormComposer } from "../../../bundles/session/composers/LoginFormComposer";

const user = {
  id: 1,
  email: "bb@bb.com",
  token: "abc"
};

const EmptyComponent = () => null;
const EnhancedComponent = LoginFormComposer(props => (
  <EmptyComponent {...props} />
));

describe("LoginFormComposer", () => {
  let wrapper;
  let enhancedComponent;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider
        mocks={[
          {
            request: {
              query: authenticateUser,
              variables: { email: "bb@bb.com", password: "secret" }
            },
            result: {
              data: user
            }
          }
        ]}
      >
        <EnhancedComponent />
      </MockedProvider>
    );
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

  test("it should match snapshot for handleSave", () => {
    const { handleSave, setFormData } = enhancedComponent.props();
    const userLogin = {
      email: "bb@bb.com",
      password: "secret"
    };
    setFormData(userLogin);
    handleSave();
    wrapper.update();
  });
});

```

## Resources:
http://blog.dideric.is/2018/03/18/Testing-apollo-containers/
https://stackoverflow.com/questions/45700550/how-to-use-a-mocked-data-with-react-apollo-for-tests?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
