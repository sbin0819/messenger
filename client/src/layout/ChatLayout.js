import styled from 'styled-components';

const Body = styled.div`
  margin: 35px auto 55px;
  width: 85vw;
  height: calc(100vh - 150px);
  background: #fff;
`;

const ChatLayout = ({ children }) => <Body>{children}</Body>;

export default ChatLayout;
