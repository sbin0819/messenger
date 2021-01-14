import Top from './Top';
import styled from 'styled-components';

const LeftContainer = styled.div`
  flex: 0 0 300px;
  border-right: 1px solid #262626;
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
  }
`;

const Left = ({ profile, friends }) => {
  return (
    <LeftContainer>
      <Top profile={profile} />
      <StyledTaps className='taps'>
        <span>주요</span>
        <span>일반</span>
      </StyledTaps>
      <StyledBody className='friend-list'>
        {friends.map((friend) => (
          <div key={friend.id}>{friend.name}</div>
        ))}
      </StyledBody>
    </LeftContainer>
  );
};

export default Left;
