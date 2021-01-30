import { useContext } from 'react';
import { CheatContext } from '../../state/context/context';

const ContextComponent = () => {
  const {
    state,
    action: { incrementAge, decrementAge },
  } = useContext(CheatContext);
  return (
    <>
      <div>이름: {state.name}</div>
      <div>나이: {state.age}</div>
      <button onClick={incrementAge}>+1</button>
      <button onClick={decrementAge}>-1</button>
    </>
  );
};
export default ContextComponent;
