import Home from '../components/ChatRoom';

const HomePage = ({ match }) => {
  const {
    params: { roomId },
  } = match;
  return <Home roomId={roomId} />;
};

export default HomePage;
