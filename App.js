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
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './pages/Home';
import FlatListScreen from './pages/FlatListScreen';
import DetailScreen from './pages/Detail';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native';

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

const CityStack = createStackNavigator();

function CityStackScreen() {
  return (
    <CityStack.Navigator>
      <CityStack.Screen name="FlatListScreen" component={FlatListScreen} />
      <CityStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({navigation, route}) => {
          console.log('navigation: ', navigation);
          console.log('route: ', route);
          return {
            headerTitle: 'customer header Title',
            headerRight: () => (
              <Button
                title={'Info'}
                onPress={() => console.log('This is a button!')}
              />
            ),
          };
        }}
      />
    </CityStack.Navigator>
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="FlatListScreen" component={CityStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
