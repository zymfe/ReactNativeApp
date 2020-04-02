/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/Home';
import FlatListScreen from './pages/FlatListScreen';
import DetailScreen from './pages/Detail';
import Icon from 'react-native-vector-icons/AntDesign';

// const Stack = createStackNavigator();
//
// function App(props) {
//   console.log('App props: ', props);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
//         <Stack.Screen name="DetailScreen" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const mapRouteToIcon = {
              Home: 'home',
              FlatListScreen: 'link',
            };

            return (
              <Icon
                name={mapRouteToIcon[route.name]}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="FlatListScreen" component={FlatListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
