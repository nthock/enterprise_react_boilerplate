import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginContainer } from './bundles/session/containers';
import { SignUpContainer, AcceptInvitationContainer, ForgetPasswordContainer, ResetPasswordContainer } from './bundles/user/containers';
import { DashboardContainer } from './bundles/dashboard/containers';
import { AdminListContainer } from './bundles/admin/containers';
import PrivateRoute from './shared/PrivateRoute';
import './css/App.css';
import './css/shared.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/forget_password" component={ForgetPasswordContainer} />
        <Route exact path="/reset_password" component={ResetPasswordContainer} />
        <Route exact path="/invite" component={AcceptInvitationContainer} />
        <PrivateRoute path="/dashboard/admins" component={AdminListContainer} />
        <PrivateRoute path="/dashboard" component={DashboardContainer} />
        <Route component={() => <p>Page Not Found</p>} />
      </Switch>
    </div>
  )
}

export default App;
