import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import List from './src/components/List';
import {ThemeProvider} from '@emotion/react';
import theme from './src/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/graphql',
  });

  console.log(client);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home">{props => <List {...props} title="screen1" />}</Stack.Screen>
            <Stack.Screen name="Detail">
              {props => <List {...props} title="screen2" />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
