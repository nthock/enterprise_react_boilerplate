import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' });

const client = new ApolloClient({
  link: httpLink,
  dataIdFromObject: o => `${o.__typename}-${o.id}`,
  cache: new InMemoryCache()
});
