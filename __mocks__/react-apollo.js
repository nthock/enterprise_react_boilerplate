import React from "react";
import mockData from "./mockData";
import errorMockData from "./errorMockData";

const actualReactApollo = require.requireActual("react-apollo");

let mockProps = {};
let errorProps = false;

const setMockGraphQLProps = props => {
  mockProps = props;
};

const setMockGraphQLErrorProps = () => {
  errorProps = true;
};

const setMockedData = (mockDataSource, operation, queryValue) => {
  const mockedData = mockDataSource[queryValue];
  if (operation === "mutation") {
    setMockGraphQLProps(mockedData);
  } else {
    setMockGraphQLProps({ data: mockedData });
  }
};

const graphql = query => Component => props => {
  const { operation } = query.definitions[0];
  const queryValue = query.definitions[0].name.value;
  if (errorProps) {
    setMockedData(errorMockData, operation, queryValue);
  } else {
    setMockedData(mockData, operation, queryValue);
  }

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
  setMockGraphQLErrorProps,
  createBatchingNetworkInterface,
  ApolloClient
};
