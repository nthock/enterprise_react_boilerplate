import React from "react";
import PropTypes from "prop-types";
import SignUpForm from "../components/SignUpForm";
import "../../../css/sessions.css";

const SignUpContainer = ({ history }) => (
  <div className="sign-up">
    <h1 className="title">Sign Up</h1>
    <SignUpForm history={history} />
  </div>
);

SignUpContainer.propTypes = {
  history: PropTypes.shape({
    go: PropTypes.func,
    push: PropTypes.func
  }).isRequired
};

export default SignUpContainer;
