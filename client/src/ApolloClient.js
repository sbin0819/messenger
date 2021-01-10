import { ApolloClient } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { InMemoryCache } from '@apollo/client/cache';
import { HttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/link-ws';

const endpoint = 'localhost:4000/graphql'; // 나의 경우 endpoint에 graphql까지 해줘야 websocket을 사용할 수 있음

const wsLink = new WebSocketLink({
  uri: `ws://${endpoint}`,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: `http://${endpoint}`,
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export default new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
