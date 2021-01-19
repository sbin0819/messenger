import { Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <Layout>
      <Route exact path="/:roomId?" component={Home} />
      <Route exact path="/chat" component={ChatRoom} />
    </Layout>
  );
}

export default App;
