import React from "react";
import PropTypes from "prop-types";
import { LoginFormComposer as LoginForm } from "../composers";
import "../../../css/sessions.css";

const LoginContainer = ({ history }) => (
  <div className="login-page">
    <h1 className="title">Log in</h1>
    <LoginForm history={history} />
  </div>
);

LoginContainer.propTypes = {
  history: PropTypes.shape({
    go: PropTypes.func,
    push: PropTypes.func
  }).isRequired
};

export default LoginContainer;
