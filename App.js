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

import {Provider} from 'react-redux';
import store from './js/store/store';

import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native';

import HomeScreen from './js/pages/Home';
import FlatListScreen from './js/pages/FlatListScreen';
import DetailScreen from './js/pages/Detail';
import CategoryScreen from './js/pages/Category';

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

const CategotyStack = createStackNavigator();

function CategoryStackScreen() {
  return (
    <CategotyStack.Navigator>
      <CategotyStack.Screen name="CategoryScreen" component={CategoryScreen} />
    </CategotyStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App({navigation}) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              const mapRouteToIcon = {
                Home: 'home',
                FlatListScreen: 'link',
                Category: 'antdesign',
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
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: '首页',
            }}
          />
          <Tab.Screen name="FlatListScreen" component={CityStackScreen} />
          <Tab.Screen name="CategoryScreen" component={CategoryStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
