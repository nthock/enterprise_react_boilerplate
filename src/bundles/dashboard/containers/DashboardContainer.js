import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

const DashboardContainer = ({ ...rest }) => (
  <Switch>
    <Layout exact path="/dashboard" component={Dashboard} title="Main" />
  </Switch>
);

export default DashboardContainer;
