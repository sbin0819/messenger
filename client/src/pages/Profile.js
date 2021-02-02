import { Switch, Route } from 'react-router-dom';
import Profile from '../components/Profile';
import Edit from '../components/Profile/Edit';
const ProfilePage = ({ match }) => {
  console.log(match);
  return (
    <>
      <Route exact path={match.path} component={Profile} />
      <Route path={`${match.path}/edit`} component={Edit} />
    </>
  );
};

export default ProfilePage;
