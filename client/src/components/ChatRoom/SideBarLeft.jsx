import styled from 'styled-components';

const LeftContainer = styled.div`
  flex: 1 0;
  border-right: 1px solid #262626;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  padding: 15px 20px;
  .choose-account {
    flex: 0 1 100px;
    max-width: 140px;
    min-height: 30px;
  }
  .search-nickname {
  }
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

const SideBarLeft = ({ profile, friends }) => {
  return (
    <LeftContainer>
      <StyledTop className='header'>
        <button className='choose-account'>{profile.nickname}</button>
        <button className='search-nickname'>search</button>
      </StyledTop>
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

export default SideBarLeft;
