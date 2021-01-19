import styled from 'styled-components';

const StyledSideBarRight = styled.div`
  flex: 2 0;
  div {
    padding: 20px;
  }
`;

/**
 * 데이터가 없을 때 빈 메시지 화면
 * 유저 선택시 그 유저와 마지막 대화 화면
 */
const SideBarRight = ({ roomId }) => {
  // roomId 매칭 없으면 빈 화면
  // const roomInfo = existingRoom.chatRoom || roomId;
  return (
    <StyledSideBarRight>
      <div>{roomId}</div>
    </StyledSideBarRight>
  );
};

export default SideBarRight;
