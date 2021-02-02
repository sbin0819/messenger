import { useState } from 'react';
import Icon from './Icon';
import Tag from './Tag';
import styled from 'styled-components';
import { CgClose, CgCheck } from 'react-icons/cg';

const StyledModal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: 13% auto; /* 20% from the top and centered */
  border: 1px solid #888;
  width: 402px; /* Could be more or less, depending on screen size */
  height: 450px;
  border-radius: 14px;
`;

const Header = styled.div`
  flex: 0 0 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  text-align: center;
  .close {
    width: 60px;
    font-size: 20px;
    cursor: pointer;
  }
  .title {
    width: 280px;
    font-size: 18px;
  }
  .next {
    width: 60px;
    color: #c3e6fd;
  }
  .next-active {
    width: 60px;
    color: #21a2f8;
  }
`;

const Body = styled.div`
  flex: 1;
  /* display: flex; */
  border-bottom: 1px solid #dbdbdb;
  overflow: scroll;
  .profile-list {
    padding: 8px 8px 8px 12px;
  }
  .profile-list-inner {
    display: flex;
    align-items: center;
    :hover {
      background: #f9faf9;
    }
  }
  .profile-username {
    margin-left: 20px;
    width: 270px;
  }
  .clicked {
    width: 50px;
    background: pink;
  }
  .circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    color: #fff;
    font-size: 30px;
    font-weight: 800;
  }
  .checked {
    background: #0095f6;
  }
`;

const StyledSearch = styled.div`
  min-height: 55px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  label {
    flex: 0 0 100px;
    padding: 0 10px;
  }
  input {
    border: 0;
    outline: 0;
    height: 30px;
    font-size: 18px;
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
  }
`;

// 채팅 방이 있는 경우 redirect
// 채팅 방이 없는 경우 생성 redirect
// 여러명 채팅 방 초대 가능 select 만들기

const Modal = ({ data, setVisible }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clickedList, setClickedList] = useState([]);

  const searchResults = !searchTerm
    ? data.friends
    : data.friends.filter((person) =>
        person.username.toLowerCase().includes(searchTerm),
      );

  const onCheckFriend = (data) => {
    data.checked ? (data.checked = false) : (data.checked = true);
    const clickedResults = searchResults.filter(
      (list) => list.checked === true,
    );
    setClickedList(clickedResults);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const close = () => {
    setVisible(false);
  };

  const makeChatRoom = (data) => {
    console.log(data);
  };

  return (
    <StyledModal>
      <ModalContent className="modal-content">
        <Header>
          <div className="close" onClick={close}>
            <CgClose />
          </div>
          <div className="title">
            <span>새로운 메시지</span>
          </div>
          {clickedList ? (
            <div
              className="next-active pointer"
              onClick={() => makeChatRoom(clickedList)}
            >
              다음
            </div>
          ) : (
            <div className="next">다음</div>
          )}
        </Header>
        <StyledSearch>
          <label>받는 사람:</label>
          <div>
            <div className="tag-list">
              {clickedList.map((list, index) => (
                <Tag
                  tag={list.username}
                  setState={setClickedList}
                  key={index}
                />
              ))}
            </div>
            <div>
              <input
                type="text"
                placeholder="검색..."
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
          </div>
        </StyledSearch>
        <Body>
          {searchResults.map((list, index) => (
            <div
              className="profile-list"
              key={index}
              onClick={() => onCheckFriend(list)}
            >
              <div className="profile-list-inner pointer">
                <Icon
                  img={list.img}
                  styles={{ width: '55px', height: '55px' }}
                />
                <div className="profile-username">{list.username}</div>
                {list.checked ? (
                  <div className="circle middle checked">
                    <CgCheck />
                  </div>
                ) : (
                  <div className="circle middle" />
                )}
              </div>
            </div>
          ))}
        </Body>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
