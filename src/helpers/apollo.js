import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('_token');

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    }
  });

  return forward(operation);
})

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  dataIdFromObject: o => `${o.__typename}-${o.id}`,
  cache: new InMemoryCache()
});

export default client;
