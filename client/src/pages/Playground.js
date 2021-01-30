import { CheatProvider } from '../state/context/context';
import ContextComponent from '../components/Playground/ContextComponent';
const Playground = () => {
  return (
    <CheatProvider>
      <div>
        <h1>context api 연습 페이지</h1>
      </div>
      <ContextComponent />
    </CheatProvider>
  );
};

export default Playground;
