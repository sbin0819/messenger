import { Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';
import Profile from './pages/Profile';
/* Context 연습 */
import Playground from './pages/Playground';

import { ProfileProvider } from './state/context/profileContext';

function App() {
  return (
    <ProfileProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/t/:roomId?" component={Home} />
        <Route exact path="/chat" component={ChatRoom} />
        <Route path="/:username" component={Profile} />
        <Route exact path="/c" component={Playground} />
      </Switch>
    </ProfileProvider>
  );
}

export default App;
