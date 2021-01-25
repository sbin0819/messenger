import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

const StyledDropDown = styled.div`
  position: absolute;
  background: gold;
  top: 60px;
  right: 5vw;
  border: 1px solid black;
  width: 400px;
  min-height: 250px;
  max-height: 400px;
  height: auto;
  background: #fff;
  text-align: center;
  overflow: scroll;
`;

const StyledNoData = styled.div`
  margin-top: 50px;
  padding: 0 30px;
  .icon-container {
    margin: auto auto;
    border: 1px solid black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 60px;
  }
  .title {
    margin: 10px 0 10px 0;
    font-size: 18px;
  }
`;

const StyledDataList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  .feed-item {
    flex: 1 0 100px;
    border-bottom: solid black 1px;
  }
`;

// 좋아요 및 댓글 data필요

const fakeList = [
  { id: 991, title: 'title', body: 'body', address: 'abc' },
  { id: 113, title: 'title', body: 'body', address: 'abc' },
  { id: 331, title: 'title', body: 'body', address: 'abc' },
  { id: 223, title: 'title', body: 'body', address: 'abc' },
  { id: 31, title: 'title', body: 'body', address: 'abc' },
  { id: 2323, title: 'title', body: 'body', address: 'abc' },
];

const DropDown = () => {
  const [data, setData] = useState(false);
  return (
    <StyledDropDown>
      {data ? (
        <StyledDataList>
          {data.map((v) => (
            <div className="feed-item" key={data.id}>
              <p>{v.title}</p>
              <p>{v.body}</p>
            </div>
          ))}
        </StyledDataList>
      ) : (
        <StyledNoData>
          <div className="icon-container middle">
            <AiOutlineHeart />
          </div>
          <div className="title">게시물 활동</div>
          <div className="body">
            다른 사람이 회원님의 게시물을 좋아하거나 댓글을 남기면 여기에
            표시됩니다.
          </div>
        </StyledNoData>
      )}
    </StyledDropDown>
  );
};

export default DropDown;
