import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

// styled prop 지정 하기

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
  margin: 20% auto; /* 20% from the top and centered */
  border: 1px solid #888;
  width: 402px; /* Could be more or less, depending on screen size */
  height: 238px;
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
  display: flex;
  border-bottom: 1px solid #dbdbdb;
`;

const Footer = styled.div`
  flex: 0 0 50px;
  font-size: 16px;
  color: rgb(0, 149, 246);
`;

const Modal = ({ type, data, setVisible }) => {
  const close = () => {
    setVisible(false);
  };

  return (
    <StyledModal>
      <ModalContent className='modal-content'>
        <Header>
          <div className='title'>
            <span>계정 전환</span>
          </div>
          <div className='close' onClick={close}>
            <CgClose />
          </div>
        </Header>
        <Body>바디</Body>
        <Footer className='middle'>
          <div>기존계정으로 로그인</div>
        </Footer>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
