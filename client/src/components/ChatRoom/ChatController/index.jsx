import { Link } from 'react-router-dom';
import Top from './Top';
import styled from 'styled-components';

const ChatControllerContainer = styled.div`
  flex: 0 0 300px;
  border-right: 1px solid #262626;
  overflow: scroll;
`;

const StyledTaps = styled.div`
  display: flex;
  height: 45px;
  background: lightpink;
  span {
    margin: 20px 25px 0;
  }
`;

const StyledBody = styled.div`
  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 10px 10px;
    height: 70px;
    :hover {
      background: #f9faf9;
    }
    a {
      width: 300px;
      height: 60px;
      display: inline-block;
    }
  }
`;

const ChatController = ({ profile, existingRoom }) => {
  return (
    <ChatControllerContainer>
      <Top profile={profile} />
      <StyledTaps className="taps">
        <span>주요</span>
        <span>일반</span>
      </StyledTaps>
      <StyledBody className="friend-list">
        {existingRoom.map((friend) => (
          <div className="pointer" key={friend.chatRoom}>
            <Link to={`${friend.chatRoom}`}>{friend.nickname}</Link>
            {/* 사이즈 조절 필요 */}
          </div>
        ))}
      </StyledBody>
    </ChatControllerContainer>
  );
};

export default ChatController;
