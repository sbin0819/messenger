import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  background: #fff;
  border: 1px solid #dbdbdb;
  div {
    flex: 1 1 0;
  }
  .logo {
    img {
      margin-left: 30px;
      object-fit: cover;
      width: 110px;
    }
  }
  .search {
    display: flex;
    justify-content: center;
    input {
      height: 30px;
      width: 180px;
    }
  }
  .icon-box {
    display: flex;
    justify-content: flex-end;
    div {
      margin: 0 50px;
    }
    span {
      margin-right: 20px;
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
          <div className="logo">
            <Link className="logo-link" to="/">
              <img src="/logo/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="search">
            <input type="text" />
          </div>
          <div className="icon-box">
            <div>
              <span>icon1</span>
              <span>icon2</span>
              <span>icon3</span>
              <span>icon4</span>
            </div>
          </div>
        </Header>
      </div>
      <Body>{children}</Body>
    </div>
  );
};

export default Layout;
