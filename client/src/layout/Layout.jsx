import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  background: lightpink;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  div {
    flex: 1 1 0;
    text-align: center;
    font-size: 20px;
  }
  .icon-box {
    /* flex: 2 1 0; */
    span {
      margin-right: 25px;
    }
  }
`;

const Body = styled.div`
  margin: 35px auto 55px;
  width: 85vw;
  height: calc(100vh - 150px);
  background: #fff;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header>
          <div className='logo'>
            <Link to='/'>Logo</Link>
          </div>
          <div className='search'>
            <Link to='/chat'>채팅</Link>
          </div>
          <div className='icon-box'>
            <span>icon-1</span>
            <span>icon-2</span>
            <span>icon-3</span>
          </div>
        </Header>
      </div>
      <Body>{children}</Body>
    </div>
  );
};

export default Layout;
