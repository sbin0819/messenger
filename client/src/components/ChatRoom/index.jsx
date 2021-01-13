import Left from './Left';
import Right from './Right';
import styled from 'styled-components';
import { fakeProfile, fakeFriends } from '../../data/fakeData';

const Body = styled.div`
  display: flex;
  height: calc(100vh - 150px);
  border: 1px solid #262626;
  font-size: 18px;
`;

const HomeComponent = () => {
  return (
    <Body>
      <Left profile={fakeProfile} friends={fakeFriends} />
      <Right />
    </Body>
  );
};

export default HomeComponent;
