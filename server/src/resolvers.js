import { PubSub } from 'apollo-server';

const pubsub = new PubSub();
const NEW_CHAT = 'NEW_CHAT';

let chattingLog = [
  {
    id: 0,
    writer: 'admin',
    description: '안녕하세요 :)',
  },
];

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

export default resolvers;
