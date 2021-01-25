import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsChat } from 'react-icons/bs';
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineHeart,
} from 'react-icons/ai';
import Icon from '../common/Icon';
import DropDown from '../common/DropDown';

import { fakeProfile } from '../data/fakeData';

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
      margin-left: 40px;
      object-fit: cover;
      width: 110px;
    }
  }
  .search {
    display: flex;
    justify-content: center;
    input {
      height: 30px;
      width: 200px;
    }
  }
  .icon-box {
    display: flex;
    justify-content: flex-end;
    div {
      margin-left: 100px;
    }
    span,
    a {
      font-size: 30px;
      color: #414141;
      margin-right: 18px;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const Layout = ({ children }) => {
  const { id } = fakeProfile;
  const [visible, setVisible] = useState(true);
  return (
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
        <div style={{ display: 'flex' }}>
          <Link to="/">
            <AiOutlineHome />
          </Link>
          <Link to="/chat">
            <BsChat />
          </Link>
          <Link to="/">
            <AiOutlineCompass />
          </Link>
          <span onClick={() => setVisible(!visible)}>
            <AiOutlineHeart />
            {visible && <DropDown />}
          </span>
          <Link to={`/profile/${id}`}>
            <Icon
              styles={{ height: '30px', width: '30px' }}
              img={'/img/profile1.jpeg'}
            />
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default Layout;
