import { ApolloServer, gql, PubSub } from 'apollo-server';

const pubsub = new PubSub();
const NEW_CHAT = 'NEW_CHAT';

let chattingLog = [
  {
    id: 0,
    writer: 'admin',
    description: 'HELLO',
  },
];

const typeDefs = gql`
  type Chat {
    id: Int!
    writer: String!
    description: String!
  }
  type Query {
    chatting: [Chat]!
  }
  type Mutation {
    write(writer: String!, description: String!): String!
  }
  type Subscription {
    newChat: Chat
  }
`;

const resolvers = {
  Query: {
    chatting: () => {
      return chattingLog;
    },
  },
  Mutation: {
    write: (_, { writer, description }) => {
      const id = chattingLog.length;
      const newChat = {
        id,
        writer,
        description,
      };
      chattingLog.push(newChat);
      pubsub.publish(NEW_CHAT, {
        newChat,
      });
      return 'YES';
    },
  },
  Subscription: {
    newChat: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_CHAT),
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { pubsub },
});

server.listen().then(({ url }) => {
  console.log(`Listening at ${url}`);
});
