import { useCallback, useState } from 'react';
import Modal from '../../../common/Modal';
import { HiPencilAlt } from 'react-icons/hi';
import styled from 'styled-components';

const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  padding: 10px 0 10px 75px;
  .choose-account {
    width: 150px;
    border: 0;
    outline: 0;
    background: inherit;
    font-size: 18px;
  }
  .search-nickname {
    width: 75px;
    border: 0;
    outline: 0;
    background: inherit;
    font-size: 25px;
  }
`;

const Top = ({ profile }) => {
  const [visible, setVisible] = useState(false);

  const openModal = useCallback((e) => {
    setVisible(e.target.name);
  }, []);

  return (
    <>
      {visible && (
        <Modal setVisible={setVisible} type={visible} data={profile} />
      )}
      <StyledTop className="header">
        <button
          className="choose-account"
          type="button"
          name="account"
          onClick={openModal}
        >
          {profile.nickname}
        </button>
        <button
          className="search-nickname"
          type="button"
          name="search"
          onClick={openModal}
        >
          <HiPencilAlt />
        </button>
      </StyledTop>
    </>
  );
};

export default Top;
