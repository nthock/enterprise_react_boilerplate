import { compose, withState, withHandlers } from "recompose";
import { graphql } from "react-apollo";
import { forgotPasswordMutation } from "../graphql";

const ForgotPasswordMutation = compose(
  graphql(forgotPasswordMutation),
  withState("formData", "setFormData", { email: "" }),
  withState("formErrors", "setFormErrors", { email: "" }),
  withState("submit", "setSubmit", false),
  withHandlers({
    handleSave: props => () => {
      const { mutate, formData, setSubmit, setFormErrors } = props;
      const email = formData.email.toLowerCase();
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      const validateValidEmail = regex.test(email);

      if (!validateValidEmail) {
        setFormErrors({ email: "Invalid Email" });
      } else {
        setSubmit(true);
        mutate({ variables: formData });
      }
    }
  })
);

export default ForgotPasswordMutation;
