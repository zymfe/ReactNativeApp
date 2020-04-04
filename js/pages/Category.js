import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {connect} from 'react-redux';
import {addName} from '../action/nameAction';
import {addUser} from '../action/userAction';

const Tab = createMaterialTopTabNavigator();

function iOS(props) {
  return (
    <View>
      <Button
        title="修改主题"
        onPress={() => {
          props.navigation.setParams({
            theme: 'blue',
          });
        }}
      />
    </View>
  );
}

function Android() {
  console.log(2);
  return (
    <View>
      <Text>Android</Text>
    </View>
  );
}

function ReactNative() {
  console.log(3);
  return (
    <View>
      <Text>ReactNative</Text>
    </View>
  );
}

function Flutter() {
  console.log(4);
  return (
    <View>
      <Text>Flutter</Text>
    </View>
  );
}

function JavaScript() {
  console.log(5);
  return (
    <View>
      <Text>JavaScript</Text>
    </View>
  );
}

function Category(props) {
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => <Button title="hello" />,
      headerRight: () => <Button title={'update count'} />,
    });
  });

  return (
    <React.Fragment>
      <View>
        {props.data.map((item) => (
          <Text>{item.title}</Text>
        ))}
        <Button
          title="add name"
          onPress={() => props.addName({title: 'world'})}></Button>

        {props.users.map((item) => (
          <Text>{item.name}</Text>
        ))}
        <Button
          title="add user"
          onPress={() => props.addUser({name: 'hello'})}></Button>
      </View>
      <Tab.Navigator
        initialRouteName="iOS"
        lazy={true}
        scrollEnabled={true}
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: {fontSize: 12},
          tabStyle: {width: 100},
          style: {backgroundColor: 'red'},
          labelStyle: {color: 'white'},
        }}>
        <Tab.Screen
          name="iOS"
          component={iOS}
          options={{tabBarLabel: 'Home'}}
        />
        <Tab.Screen
          name="Android"
          component={Android}
          options={{tabBarLabel: 'Updates'}}
        />
        <Tab.Screen
          name="ReactNative"
          component={ReactNative}
          options={{tabBarLabel: 'ReactNative'}}
        />
        <Tab.Screen
          name="Flutter"
          component={Flutter}
          options={{tabBarLabel: 'Flutter'}}
        />
        <Tab.Screen
          name="JavaScript"
          component={JavaScript}
          options={{tabBarLabel: 'JavaScript'}}
        />
        <Tab.Screen
          name="JavaScript1"
          component={JavaScript}
          options={{tabBarLabel: 'JavaScript1'}}
        />
        <Tab.Screen
          name="JavaScript2"
          component={JavaScript}
          options={{tabBarLabel: 'JavaScript2'}}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.nameReducer.data,
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addName: (data) => dispatch(addName(data)),
  addUser: (user) => dispatch(addUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
