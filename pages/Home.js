import React from 'react';
import {View, Button} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Button
          title="Go to FlatListScreen"
          onPress={() => this.props.navigation.navigate('FlatListScreen')}
        />
      </View>
    );
  }
}

module.exports = HomeScreen;
