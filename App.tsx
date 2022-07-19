import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ListScreen from './src/screen/ListScreen';
import {RootStackParamsList} from './src/Navigation';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import DetailsScreen from './src/screen/DetailsScreen';
import AboutScreen from './src/screen/AboutScreen';
import {Text, TouchableOpacity} from 'react-native';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={({navigation}) => ({
          title: 'SpaceX Launches',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Text>About</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'View Mission'}}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'About'}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
