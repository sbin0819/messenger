import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Profile from '../components/Profile';
import Edit from '../components/Profile/Edit';
import { ProfileContext } from '../state/context/profileContext';

const ProfilePage = ({ match }) => {
  const {
    state: {username}
  } = useContext(ProfileContext);
  if(match.params.username !== username) {
    return <Redirect to='/404'/>
  }
  return (
    <>
      <Route exact path={match.path} component={Profile} />
      <Route path={`${match.path}/edit`} component={Edit} />
    </>
  );
};

export default ProfilePage;
