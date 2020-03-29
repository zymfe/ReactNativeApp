import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

function DetailScreen({navigatin, route}) {
  return (
    <View>
      <Text>
        {route.name}: {route.params.city}
      </Text>
    </View>
  );
}

module.exports = DetailScreen;
