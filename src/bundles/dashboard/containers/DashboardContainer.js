import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';

const DashboardContainer = ({ ...rest }) => (
  <Switch>
    <Layout exact path="/dashboard" component={() => <div>Main Dashboard</div> } title="Main" />
  </Switch>
);

export default DashboardContainer;
