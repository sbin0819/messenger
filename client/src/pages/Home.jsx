import Home from '../components/ChatRoom';
import ChatLayout from '../layout/ChatLayout';

const HomePage = ({ match }) => {
  const {
    params: { roomId },
  } = match;
  return (
    <ChatLayout>
      <Home roomId={roomId} />
    </ChatLayout>
  );
};

export default HomePage;
