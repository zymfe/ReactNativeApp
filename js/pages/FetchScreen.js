import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

const url = 'https://api.github.com/search/repositories?q=';

export default function FetchScreen({navigation}) {
  const [content, setContent] = useState('');
  const [searchResult, setSearchResult] = useState('');

  function loadData() {
    fetch(url + content)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network Error');
      })
      .then((responseText) => {
        setSearchResult(responseText);
      })
      .catch((error) => {
        setSearchResult(error.toString());
      });
  }

  useEffect(() => {
    if (!content) return;
    loadData();
  }, [content]);

  return (
    <React.Fragment>
      <Button
        title="Go go Category"
        onPress={() => {
          navigation.navigate('DetailScreen', {city: '自定义'});
        }}></Button>
      <Button
        title="save data"
        onPress={() => {
          AsyncStorage.setItem('content', content.toString()).then((res) =>
            console.log(res),
          );
        }}></Button>
      <Button
        title="get data"
        onPress={() => {
          AsyncStorage.getItem('content').then((res) => console.log(res));
        }}></Button>
      <TextInput
        defaultValue="werwer"
        placeholder="请输入搜索内容"
        onBlur={(value) => setContent(value)}
        style={styles.textInput}
      />
      <View>
        <Text>{searchResult}</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'red',
    width: 300,
    height: 50,
  },
});
