import React from 'react';
import {SafeAreaView} from 'react-native';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import List from './src/components/List';
import {ThemeProvider} from '@emotion/react';
import theme from './src/theme';

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/graphql',
  });

  console.log(client);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <List />
        </SafeAreaView>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
