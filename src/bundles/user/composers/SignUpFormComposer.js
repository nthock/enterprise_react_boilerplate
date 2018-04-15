import { compose, withHandlers, withState } from "recompose";
import { graphql } from "react-apollo";
import { createUserMutation } from "../graphql";
import { formatErrors } from "../../../helpers/form";
import { signIn } from "../../../helpers/auth";

const SignUpFormComposer = compose(
  graphql(createUserMutation),
  withState("formData", "setFormData", {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }),
  withState("formErrors", "setFormErrors", {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }),
  withHandlers({
    handleSave: props => () => {
      const { formData, mutate, setFormErrors, history } = props;
      mutate({
        variables: formData,
        update: (store, { data: { create_user } }) => {
          if (create_user.errors.length === 0) {
            signIn(create_user);
            history.push("/dashboard");
          } else {
            setFormErrors(formatErrors(create_user.errors));
          }
        }
      });
    }
  })
);

export default SignUpFormComposer;
