import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Navigation } from '../../../shared';
import Auth from '../../../helpers/auth';
import { Modal } from '../../../shared';

const Layout = ({ component: Component, title, ...rest}) => (
  <div>
    <Navigation title={title}>
      <Route {...rest} render={matchProps => (
        <Modal>

          {
            Auth.currentUser() ? (
              <Component {...matchProps} />
            ) : (
              <Redirect to={{
                pathname: '/dashboard/unauthorized',
                state: { from: '' },
              }}
              />
            )
          }

        </Modal>
      )} />
    </Navigation>
  </div>
);

export default Layout;
