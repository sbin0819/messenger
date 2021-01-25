import { useState } from 'react';
import styled from 'styled-components';

const StyledDropDown = styled.div`
  position: absolute;
  top: 60px;
  right: 8vw;
  border: 1px solid black;
  width: 400px;
  height: 300px;
  background: #fff;
`;

const StyledNoData = styled.div``;

const DropDown = () => {
  const [data, setData] = useState(false);
  return (
    <StyledDropDown>
      {data ? <div>데이터</div> : <StyledNoData>no data</StyledNoData>}
    </StyledDropDown>
  );
};

export default DropDown;
