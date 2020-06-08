import React from 'react';
import { Dashboard } from './pages/Dashboard'
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from 'apollo-cache-inmemory';



const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://covid19-graphql.now.sh',
});

const client = new ApolloClient({
  cache,
  link
})

const  App = () => {
  return (
    <ApolloProvider client={client}>
    <Dashboard/>
    </ApolloProvider>
  );
}

export default App;
