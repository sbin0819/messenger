import Search from './Search';
import Icon from './Icon';
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
  height: ${(props) => props?.height || '238px'};
  /* height: 238px; */
  border-radius: 14px;
`;

const Header = styled.div`
  flex: 0 0 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  padding-left: 40px;
  .title {
    width: 320px;
    font-size: 18px;
    text-align: center;
  }
  .close {
    width: 40px;
    font-size: 20px;
    cursor: pointer;
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
    /* cursor: pointer; */
  }
  .profile-nickname {
    margin-left: 20px;
  }
  .checked {
    margin-left: 210px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #0095f6;
    color: white;
    font-size: 30px;
    font-weight: 800;
  }
`;

const Footer = styled.div`
  flex: 0 0 50px;
  font-size: 16px;
  color: rgb(0, 149, 246);
`;

const Modal = ({ data, setVisible }) => {
  const close = () => {
    setVisible(false);
  };

  return (
    <StyledModal>
      <ModalContent className="modal-content">
        <Header>
          <div className="title">
            <span>계정 전환</span>
          </div>
          <div className="close" onClick={close}>
            <CgClose />
          </div>
        </Header>
        <Body>
          {/* data.others 에 따라서 늘어나야함 */}
          {data.friends.map((other, index) => (
            <div className="profile-list" key={index}>
              <div className="profile-list-inner">
                <Icon
                  img={other.img}
                  styles={{ width: '55px', height: '55px' }}
                />
                <span className="profile-nickname">{other.nickname}</span>
                {other.checked && (
                  <span className="checked middle">
                    <CgCheck />
                  </span>
                )}
              </div>
            </div>
          ))}
        </Body>
        <Footer className="middle">
          <div className="pointer">기존계정으로 로그인</div>
        </Footer>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
