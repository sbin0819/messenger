import { useContext } from 'react';
import { ProfileContext } from '../../state/context/profileContext';

import ProfileCard from './ProfileCard';
import Tabs from './Tabs';

const Profile = () => {
  const {
    state,
    action: { incrementAge, decrementAge },
  } = useContext(ProfileContext);
  return (
    <div style={{ margin: '50px' }}>
      <ProfileCard state={state} />
      <Tabs />
    </div>
  );
};
export default Profile;
