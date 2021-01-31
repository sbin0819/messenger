import { createContext, useState } from 'react';

const ProfileContext = createContext();
const ProfileProvider = ({ children }) => {
  const [state, setState] = useState({
    id: '123',
    username: 'sbin_ha',
    name: 'SUBIN HA',
    age: 20,
    email: 'sbinha123@gmail.com',
    img: '/img/profile1.jpeg',
    phone: '000-0000-0000',
    follower: [],
    following: [],
    post: [],
  });

  const incrementAge = () => {
    setState((preState) => ({
      ...preState,
      age: state.age + 1,
    }));
  };

  const decrementAge = () => {
    setState((preState) => ({
      ...preState,
      age: state.age - 1,
    }));
  };

  const action = { incrementAge, decrementAge };

  return (
    <ProfileContext.Provider value={{ state, action }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
