import { gql, useQuery, useSubscription } from '@apollo/client';

const GET_CHATTING = gql`
  query GetChatting {
    chatting {
      id
      writer
      description
    }
  }
`;

/* subscribeToMore에 document 정보를 주기 위해서 필요함 */
const NEW_CAHT = gql`
  subscription NewChat {
    newChat {
      id
      writer
      description
    }
  }
`;

let unsubscribe = null; //publish 했을때 변화

const ChatRoomContainer = () => {
  const { loading, error, data, subscribeToMore } = useQuery(GET_CHATTING);
  /** useSubscription을 굳이 쓸 필요가 없었다. */
  // const { loading: subLoading, error: subError, data: newChat } = useSubscription(
  //   NEW_CAHT,
  // );

  if (loading) return 'Loading...';
  if (error) return `Error!`;
  if (!unsubscribe) {
    unsubscribe = subscribeToMore({
      document: NEW_CAHT,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { newChat } = subscriptionData.data;
        return {
          ...prev,
          chatting: [...prev.chatting, newChat],
        };
      },
    });
  }

  return (
    <div>
      <h1>Apollo 채팅방에 오신걸 환영합니다.</h1>
      {data.chatting.map((x) => (
        <h3 key={x.id}>
          {x.writer}: {x.description}
        </h3>
      ))}
    </div>
  );
};

export default ChatRoomContainer;
