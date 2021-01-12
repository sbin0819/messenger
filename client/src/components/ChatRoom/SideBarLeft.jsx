import styled from 'styled-components';

const LeftContainer = styled.div`
  flex: 1 0;
  border-right: 1px solid #262626;
`;

const StyledTop = styled.div`
  height: 60px;
  div {
    text-align: center;
    padding: 15px 20px;
    button {
      min-width: 140px;
      min-height: 30px;
    }
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

/**
 * profile: {id: '', nickname:'', name: '', text: '', icon:''}
 */

const SideBarLeft = () => {
  return (
    <LeftContainer>
      <StyledTop class='header'>
        <div>
          {/* 입력한 아이디 */}
          <button>subin.kevin</button>
          <button id='search-nickname'>search</button>
        </div>
      </StyledTop>
      <StyledTaps class='taps'>
        <span>주요</span>
        <span>일반</span>
      </StyledTaps>
      <StyledBody className='friend-list'>
        {/* 대화중인 친구 리스트 */}
        <div>frined1</div>
        <div>frined2</div>
        <div>frined3</div>
      </StyledBody>
    </LeftContainer>
  );
};

export default SideBarLeft;
