import { Link, useHistory } from 'react-router-dom';

import Icon from '../../common/Icon';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  height: 190px;
  border-bottom: 1px solid #dbdbdb;
`;

const StyledContent = styled.div`
  flex: 1;
  margin-left: 40px;
  line-height: 22px;
  .header,
  .body {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    h1 {
      font-size: 24px;
    }
  }

  .header > div {
    margin-right: 18px;
  }
  .body > div {
    margin-right: 30px;
  }
`;

const ProfileCard = ({ state }) => {
  const history = useHistory();
  return (
    <StyledCard>
      <div style={{ marginLeft: '30px' }}>
        <Icon styles={{ width: '140px', height: '140px' }} img={state.img} />
      </div>
      <StyledContent>
        <div className="header">
          <div>
            <h1>{state.name}</h1>
          </div>
          <div>
            <button
              onClick={() => history.push(`${history.location.pathname}/edit`)}
            >
              프로파일 편집
            </button>
          </div>
          <div>
            <button>icon</button>
          </div>
        </div>
        <div className="body">
          <div>게시물 {state.post.length}</div>
          <div>팔로워 {state.follower.length}</div>
          <div>팔로우 {state.following.length}</div>
        </div>
        <div className="footer">
          <p>사용자 이름</p>
          <p>자기 소개</p>
          <p>웹사이트</p>
        </div>
      </StyledContent>
    </StyledCard>
  );
};

export default ProfileCard;
