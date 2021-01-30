import { createContext, useState } from 'react';

const CheatContext = createContext();
const CheatProvider = ({ children }) => {
  const [state, setState] = useState({
    name: '철수',
    age: 20,
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
    <CheatContext.Provider value={{ state, action }}>
      {children}
    </CheatContext.Provider>
  );
};

export { CheatContext, CheatProvider };
