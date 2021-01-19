import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

const StyledTag = styled.div`
  flex: 0 1 auto;
  padding: 6px;
  margin-top: 5px;
  margin-right: 10px;
  border-radius: 5px;
  background: #e0f1ff;
  color: #21a2f8;
  .close {
    margin-left: 5px;
    padding-left: 10px;
  }
`;

const Tag = ({ tag, setState }) => {
  const onClose = (tag) => {
    setState((prev) => prev.filter((item) => item.nickname !== tag));
  };
  return (
    <StyledTag className="middle">
      <span>{tag}</span>
      <span className="close pointer" onClick={() => onClose(tag)}>
        <CgClose />
      </span>
    </StyledTag>
  );
};

export default Tag;
