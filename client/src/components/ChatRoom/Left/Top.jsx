import { useCallback, useState } from 'react';
import Modal from '../../../common/Modal';
import styled from 'styled-components';

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

const Top = ({ profile }) => {
  const [visible, setVisible] = useState(true);

  const openModal = useCallback((e) => {
    setVisible(e.target.name);
  });

  return (
    <>
      {visible && (
        <Modal setVisible={setVisible} type={visible} data={profile} />
      )}
      <StyledTop className='header'>
        <button className='choose-account' name='account' onClick={openModal}>
          {profile.nickname}
        </button>
        <button className='search-nickname' name='search' onClick={openModal}>
          search
        </button>
      </StyledTop>
    </>
  );
};

export default Top;
