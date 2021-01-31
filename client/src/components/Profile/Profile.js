import { useContext } from 'react';
import { ProfileContext } from '../../state/context/profileContext';

const Profile = () => {
  const {
    state,
    action: { incrementAge, decrementAge },
  } = useContext(ProfileContext);
  return (
    <>
      <div>이름: {state.name}</div>
      <div>나이: {state.age}</div>
      <div>이메일: {state.email}</div>
      <button onClick={incrementAge}>+1</button>
      <button onClick={decrementAge}>-1</button>
    </>
  );
};
export default Profile;
