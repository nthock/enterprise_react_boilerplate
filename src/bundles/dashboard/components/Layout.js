import React from 'react';
import { Route } from 'react-router-dom';
import { Navigation, Dialog, PrivateRoute } from '../../../shared';

const Layout = ({ component: Component, title, currentUser, ...rest}) => (
  <div>
    <Navigation title={title} currentUser={currentUser}>
      <Route {...rest} render={matchProps => (
        <Dialog>
          <Component currentUser={currentUser} {...matchProps} />
        </Dialog>
      )} />
    </Navigation>
  </div>
);
// const Layout = ({ component: Component, title, path, currentUser, ...rest}) => (
//   <div>
//     <Navigation title={title} currentUser={currentUser}>
//       <PrivateRoute path={path} component={Component} />
//     </Navigation>
//   </div>
// );

export default Layout;
