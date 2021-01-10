import { ApolloProvider } from '@apollo/client';
import apolloClient from './ApolloClient';
import Home from './Home';
import Input from './Input';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Home />
      <Input />
    </ApolloProvider>
  );
}

export default App;
