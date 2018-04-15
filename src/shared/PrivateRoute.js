import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { verifyToken } from "../helpers/auth";
import { Loader } from "../helpers/loader";
import Dialog from "./Dialog";
import Navigation from "./Navigation";

class PrivateRoute extends React.Component {
  state = {
    loading: true,
    currentUser: null
  };

  componentDidMount() {
    console.log("authenticating...");

    verifyToken().then(({ data }) => {
      this.setState({
        loading: false,
        currentUser: data.verifyToken
      });
    });
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { currentUser, loading } = this.state;
    if (loading) {
      return <Loader />;
    }

    return (
      <Route
        {...rest}
        render={props => (
          <div>
            {currentUser === null && <Redirect to={{ pathname: "/" }} />}
            <Navigation currentUser={currentUser}>
              <Dialog>
                <Component {...props} currentUser={currentUser} />
              </Dialog>
            </Navigation>
          </div>
        )}
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PrivateRoute;
