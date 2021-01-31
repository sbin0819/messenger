import { Route } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';
import Profile from './pages/Profile';
/* Context 연습 */
import Playground from './pages/Playground';

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/t/:roomId?" component={Home} />
      <Route exact path="/chat" component={ChatRoom} />
      <Route exact path="/profile/:userId" component={Profile} />
      <Route exact path="/play" component={Playground} />
    </>
  );
}

export default App;
