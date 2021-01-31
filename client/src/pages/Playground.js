import { ProfileProvider } from '../state/context/profileContext';
import ProfileComponent from '../components/Profile/Profile';
const Playground = () => {
  return (
    <ProfileProvider>
      <div>
        <h1>context api 연습 페이지</h1>
      </div>
      <ProfileComponent />
    </ProfileProvider>
  );
};

export default Playground;
