import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Navigation } from '../../../shared';

const Layout = ({ component: Component, title, ...rest}) => (
  <div>
    <Navigation title={title}>
      <Component />
    </Navigation>
  </div>
);

export default Layout;
