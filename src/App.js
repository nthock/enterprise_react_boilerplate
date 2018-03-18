import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginContainer } from './bundles/session/containers';
import { SignUpContainer } from './bundles/user/containers';
import { DashboardContainer } from './bundles/dashboard/containers';
import './css/App.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route component={() => <p>Page Not Found</p>} />
      </Switch>
    </div>
  )
}

export default App;
