import { gql } from 'apollo-server';

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

export default typeDefs;
