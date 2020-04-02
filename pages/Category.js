import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Feed({navigation}) {
  console.log(1);
  return (
    <View>
      <Button
        title="修改主题"
        onPress={() => {
          navigation.setParams({
            theme: 'blue',
          });
        }}
      />
    </View>
  );
}

function Notifications() {
  console.log(2);
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
}

function Profile() {
  console.log(3);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

function Category({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button title="hello" />,
      headerRight: () => <Button title={'update count'} />,
    });
  });

  console.log('category render');

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      lazy={true}
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{tabBarLabel: 'Updates'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
}

module.exports = Category;
