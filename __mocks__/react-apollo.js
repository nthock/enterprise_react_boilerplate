import React from "react";
import mockData from './mockData';

const actualReactApollo = require.requireActual("react-apollo");

let mockProps = {};

const setMockGraphQLProps = props => {
  mockProps = props;
};

const graphql = query => Component => props => {
  const operation = query["definitions"][0].operation;
  const queryValue = query["definitions"][0].name.value;
  const mockedData = mockData[queryValue];
  // if (operation === 'mutation') {
  //   setMockGraphQLProps({mutate: jest.fn});
  // }
  setMockGraphQLProps({ data: mockedData });
  const mutate = () => {};

  return <Component {...mockProps} {...props} />;
};

const {
  compose,
  createBatchingNetworkInterface,
  ApolloClient
} = actualReactApollo;

export {
  graphql,
  compose,
  setMockGraphQLProps,
  createBatchingNetworkInterface,
  ApolloClient
};
