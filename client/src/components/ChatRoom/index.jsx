import ChatController from './ChatController';
import ChatViewer from './ChatViewer';
import styled from 'styled-components';
import { fakeProfile, fakeFriends } from '../../data/fakeData';

const Body = styled.div`
  display: flex;
  height: calc(100vh - 150px);
  border: 1px solid #262626;
  font-size: 18px;
`;

const HomeComponent = ({ roomId }) => {
  return (
    <Body>
      <ChatController profile={fakeProfile} friends={fakeFriends} />
      <ChatViewer roomId={roomId} />
    </Body>
  );
};

export default HomeComponent;
