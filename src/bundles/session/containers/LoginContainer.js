import React from 'react';
import { LoginFormComposer as LoginForm } from '../composers';
// import LoginForm from '../components/LoginForm';
import '../../../css/sessions.css';

const LoginContainer = ({ history }) => (
  <div className="login-page">
    <h1 className="title">Log in</h1>
    <LoginForm history={history} />
  </div>
);

export default LoginContainer;
