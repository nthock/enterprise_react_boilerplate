import React from 'react';
import Dashboard from '../components/Dashboard';

const DashboardContainer = ({ currentUser, ...rest }) => (
  <div>
    <Dashboard />
  </div>
);

export default DashboardContainer;
