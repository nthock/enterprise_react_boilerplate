import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginContainer } from '../../session/containers';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

const DashboardContainer = ({ ...rest }) => (
  <Switch>
    <Layout exact path="/dashboard" component={Dashboard} title="Main" />
    <Route exact path="/dashboard/unauthorized" component={LoginContainer} />
  </Switch>
);

export default DashboardContainer;
