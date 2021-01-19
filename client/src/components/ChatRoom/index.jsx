import ChatController from './ChatController';
import ChatViewer from './ChatViewer';
import styled from 'styled-components';
import { fakeProfile } from '../../data/fakeData';

const Body = styled.div`
  display: flex;
  height: calc(100vh - 150px);
  border: 1px solid #262626;
  font-size: 18px;
`;

const HomeComponent = ({ roomId }) => {
  const existingRoom = fakeProfile.friends.filter((item) => item.chatRoom);
  return (
    <Body>
      <ChatController profile={fakeProfile} existingRoom={existingRoom} />
      <ChatViewer roomId={roomId} existingRoom={existingRoom} />
    </Body>
  );
};

export default HomeComponent;
