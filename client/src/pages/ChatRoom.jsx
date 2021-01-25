import ChatLayout from '../layout/ChatLayout';
import ChatRoomContainer from '../containers/ChatRoomContainer';
import Input from '../containers/Input';

const ChatRoomPage = () => (
  <ChatLayout>
    <ChatRoomContainer />
    <Input />
  </ChatLayout>
);

export default ChatRoomPage;
