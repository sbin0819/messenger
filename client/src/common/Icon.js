import { FaUserAlt } from 'react-icons/fa';

import styled from 'styled-components';

const StyledIcon = styled.span`
  width: ${(props) => props?.width || '55px'};
  height: ${(props) => props?.height || '55px'};
  border-radius: 50%;
  background: #a2aab6;
  display: flex;
  justify-content: center;
  align-items: center;
  .default {
    font-size: 30px;
  }
  img {
    border-radius: 50%;
    width: ${(props) => props?.width || '55px'};
    height: ${(props) => props?.height || '55px'};
    object-fit: cover;
  }
`;

const Icon = ({ img, styles }) => {
  return (
    <StyledIcon {...styles}>
      {img ? (
        <img src={`${img}`} alt="sample" />
      ) : (
        <FaUserAlt className="default" />
      )}
    </StyledIcon>
  );
};

export default Icon;
