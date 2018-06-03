import React from "react";
import { Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { LoginContainer } from "./bundles/session/containers";
import {
  SignUpContainer,
  AcceptInvitationContainer,
  ForgetPasswordContainer,
  ResetPasswordContainer
} from "./bundles/user/containers";
import { DashboardContainer } from "./bundles/dashboard/containers";
import { AdminListContainer } from "./bundles/admin/containers";
import ChatContainer from "./bundles/chat/ChatContainer";
import PrivateRoute from "./shared/PrivateRoute";
import "./css/App.css";
import "./css/shared.css";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route
        exact
        path="/forget_password"
        component={ForgetPasswordContainer}
      />
      <Route exact path="/reset_password" component={ResetPasswordContainer} />
      <Route exact path="/invite" component={AcceptInvitationContainer} />
      <Route exact path="/chat" component={ChatContainer} />
      <PrivateRoute path="/dashboard/admins" component={AdminListContainer} />
      <PrivateRoute path="/dashboard" component={DashboardContainer} />
      <Route component={() => <p>Page Not Found</p>} />
    </Switch>
  </div>
);

export default App;
