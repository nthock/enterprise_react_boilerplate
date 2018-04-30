```javascript
import React from "react";
import { mount } from "enzyme";
import ResetPasswordComposer from "../../../bundles/user/composers/ResetPasswordComposer";

const EmptyComponent = () => null;
const EnhancedComponent = ResetPasswordComposer(props => (
  <EmptyComponent {...props} />
));

describe("ResetPasswordComposer", () => {
  let wrapper;
  let enhancedComponent;

  beforeEach(() => {
    Object.defineProperty(global.window.location, "href", {
      writable: true,
      value: "http://localhost:3000/reset_password?token=abc"
    });
    wrapper = mount(<EnhancedComponent />);
    enhancedComponent = wrapper.find(EmptyComponent);
  });

  test("blah blah", () => {
    console.log(enhancedComponent.props());
  });

  // test("it should return the default formData of empty email", () => {
  //   const { formData } = enhancedComponent.props();
  //   expect(formData).toEqual({
  //     email: ""
  //   });
  // });
  //
  // test("it should update the formData when call setFormData", () => {
  //   const { setFormData } = enhancedComponent.props();
  //   const userForgotPassword = {
  //     email: "bb@bb.com"
  //   };
  //   setFormData(userForgotPassword);
  //
  //   wrapper.update();
  //   expect(wrapper.find(EmptyComponent).props().formData).toEqual(
  //     userForgotPassword
  //   );
  // });
  //
  // test("it should return the default formErrors of empty name, email, pw and pw confirmation", () => {
  //   const { formErrors } = enhancedComponent.props();
  //   expect(formErrors).toEqual({
  //     email: ""
  //   });
  // });
  //
  // test("it should update the formData when call setFormData", () => {
  //   const { setFormErrors } = enhancedComponent.props();
  //   const userForgotPasswordError = {
  //     email: "must be present"
  //   };
  //   setFormErrors(userForgotPasswordError);
  //
  //   wrapper.update();
  //   expect(wrapper.find(EmptyComponent).props().formErrors).toEqual(
  //     userForgotPasswordError
  //   );
  // });
  //
  // test("it should set the formError when the email is invalid", () => {
  //   const { handleSave, setFormData } = enhancedComponent.props();
  //   setFormData({ email: "bbbbb" });
  //   wrapper.update();
  //   handleSave();
  //   wrapper.update();
  //   expect(wrapper.find(EmptyComponent).props().formErrors).toEqual({
  //     email: "Invalid Email"
  //   });
  // });
  //
  // test("it should call the mutate function when call handleSave", () => {
  //   const { handleSave, setFormData, mutate } = enhancedComponent.props();
  //   const user = {
  //     email: "bb@bb.com"
  //   };
  //   setFormData(user);
  //   handleSave();
  //   wrapper.update();
  //   expect(mutate.mock.calls.length).toBe(1);
  // });
});

```

## Resources:
http://blog.dideric.is/2018/03/18/Testing-apollo-containers/
https://stackoverflow.com/questions/45700550/how-to-use-a-mocked-data-with-react-apollo-for-tests?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
