import React from 'react';
import {View, Button, Text} from 'react-native';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>矢量图表</Text>
        <Icon name="enviroment" size={30} color="#900" />
        <Button
          title="Go to FlatListScreen"
          onPress={() => this.props.navigation.navigate('FlatListScreen')}
        />
        <Button
          title="Go to CategoryScreen"
          onPress={() => this.props.navigation.navigate('CategoryScreen')}
        />
      </View>
    );
  }
}

module.exports = HomeScreen;
