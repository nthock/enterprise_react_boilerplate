import React from 'react';
import { pure, compose } from 'recompose';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { displayLoadingState } from '../../../helpers/compose';

const userListQuery = gql`
  query {
    users {
      id
      name
      email
      designation
      admin
      super_admin
    }
  }
`;

const Dashboard = (props) => {
  console.log(props);
  return (
    <div>
      Main Dashboard Component
    </div>
  );
}

const enhance = compose(
  graphql(userListQuery),
  displayLoadingState,
  pure
);

export default enhance(Dashboard);
