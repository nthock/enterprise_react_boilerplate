import { compose, withState, withHandlers } from "recompose";
import { graphql } from "react-apollo";
import { resetForgotPasswordQuery } from "../graphql";
import { formatErrors } from "../../../helpers/form";
import { signIn } from "../../../helpers/auth";

const ResetPasswordComposer = compose(
  graphql(resetForgotPasswordQuery),
  withState("formData", "setFormData", () => {
    console.log('window', new URL(window.location.href)); 
    const reset_password_token = new URL(window.location.href).searchParams.get(
      "token"
    );
    return { reset_password_token, password: "", password_confirmation: "" };
  }),
  withState("formErrors", "setFormErrors", {
    password: "",
    password_confirmation: ""
  }),
  withHandlers({
    handleSave: props => () => {
      const { mutate, formData, setFormErrors, history } = props;
      mutate({
        variables: formData,
        update: (store, { data: { resetForgotPassword } }) => {
          if (resetForgotPassword.errors.length === 0) {
            signIn(resetForgotPassword);
            history.push("/dashboard");
          } else {
            setFormErrors(formatErrors(resetForgotPassword.errors));
          }
        }
      });
    }
  })
);

export default ResetPasswordComposer;
