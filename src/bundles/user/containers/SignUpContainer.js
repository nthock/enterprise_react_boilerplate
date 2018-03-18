import React from 'react';
// import { LoginFormComposer as LoginForm } from '../composers';
import SignUpForm from '../components/SignUpForm';
import '../../../css/sessions.css';

const SignUpContainer = ({ history }) => (
  <div className="sign-up">
    <h1 className="title">Sign Up</h1>
    <SignUpForm history={history} />
  </div>
);

export default SignUpContainer;
