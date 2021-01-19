import { useCallback, useState } from 'react';
import Modal from '../../../common/Modal';
import ModalSearch from '../../../common/ModalSearch';
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
    :hover {
      color: #0095f6;
      font-weight: bold;
    }
  }
`;

const Top = ({ profile }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalSearch, setVisibleModalSearch] = useState(false);

  const openModal = useCallback((e) => {
    e.preventDefault();
    setVisibleModal(true);
  }, []);

  const openModalSearch = useCallback((e) => {
    e.preventDefault();
    setVisibleModalSearch(true);
  }, []);

  return (
    <>
      {visibleModal && <Modal setVisible={setVisibleModal} data={profile} />}
      {visibleModalSearch && (
        <ModalSearch setVisible={setVisibleModalSearch} data={profile} />
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
          onClick={openModalSearch}
        >
          <HiPencilAlt />
        </button>
      </StyledTop>
    </>
  );
};

export default Top;
