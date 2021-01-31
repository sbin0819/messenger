import { ProfileProvider } from '../state/context/profileContext';
import Profile from '../components/Profile/Profile';
const ProfilePage = () => {
  return (
    <ProfileProvider>
      <div>
        <h1>Profile Ppage</h1>
      </div>
      <Profile />
    </ProfileProvider>
  );
};

export default ProfilePage;
