import { Route } from 'react-router-dom';
import Profile from '../components/Profile';
import Edit from '../components/Profile/Edit';
const ProfilePage = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}/edit`} component={Edit} />
      <Route exact path={match.path} component={Profile} />
    </>
  );
};

export default ProfilePage;
