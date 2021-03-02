import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
// import { createUploadLink } from 'apollo-upload-client'


 const httpsLink = new HttpLink({
  uri: 'https://rested-viper-15.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': "xckv5KIGc49wB3KJxm0en4HzlyQcl4BlJLQ3NOoMAN3T33Lv1W7m7i1hHoG12f5X"
  }
});

const wssLink = new WebSocketLink({
  uri: "wss://rested-viper-15.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': "xckv5KIGc49wB3KJxm0en4HzlyQcl4BlJLQ3NOoMAN3T33Lv1W7m7i1hHoG12f5X"
      }
    }
  }
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wssLink,
  httpsLink
);

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
};

const client = createApolloClient();

ReactDOM.render(
  (<ApolloProvider client={client}>
    <App />
  </ApolloProvider>),
  document.getElementById('root')
);