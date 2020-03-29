import React, {useState, useEffect, useCallback} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
  RefreshControl,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const dataArray = [
  '北京',
  '上海',
  '广州',
  '深圳',
  '杭州',
  '南京',
  '太原',
  '成都',
  '重庆',
  '合肥',
];

function FlatListScreen({navigation}) {
  const [dataList, setDataList] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [selected, setSelected] = useState(new Map());

  const loadData = () => {
    setLoadingStatus(true);
    setTimeout(() => {
      const dataList = dataArray.sort(() => Math.random() > 0.5);
      const total = dataArray.length;
      for (let i = 0; i < total; i++) {
        const random = Math.floor(Math.random() * total);
        dataArray[random] = dataArray.splice(i, 1, dataArray[random])[0];
      }
      setDataList(dataArray);
      setLoadingStatus(false);
    }, 1000);
  };

  const onSelect = useCallback(
    (city) => {
      const newSelected = new Map(selected);
      newSelected.set(city, !selected.get(city));
      setSelected(newSelected);
    },
    [selected],
  );

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataList}
        refreshControl={
          Platform.OS === 'ios' ? (
            <RefreshControl
              title="加载中"
              titleColor="red"
              tintColor="red"
              refreshing={loadingStatus}
              onRefresh={() => loadData()}
            />
          ) : (
            <RefreshControl
              title="加载中"
              titleColor="red"
              colors={['red']}
              refreshing={loadingStatus}
              onRefresh={() => loadData()}
            />
          )
        }
        keyExtractor={(item) => item}
        extraData={selected}
        ListFooterComponent={
          <View style={styles.more}>
            <ActivityIndicator />
            <Text style={styles.moreTips}>火速加载中...</Text>
          </View>
        }
        onEndReached={(distanceFromEnd) => {
          setTimeout(() => {
            setDataList(
              dataArray.concat(
                dataList.map((item) => item + Date.now() + Math.random()),
              ),
            );
          }, 1000);
        }}
        onEndReachedThreshold={0.1}
        renderItem={({index, item}) => (
          <TouchableOpacity activeOpacity={1} onPress={() => onSelect(item)}>
            <View style={[styles.item, {backgroundColor: 'blue'}]}>
              <Text
                style={[
                  styles.text,
                  {color: selected.get(item) ? 'red' : 'white'},
                ]}
                onPress={() =>
                  navigation.navigate('DetailScreen', {city: item})
                }>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// class FlatListScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataList: [],
//       loading: false,
//     };
//   }
//
//   loadData() {
//     this.setState({
//       loading: true,
//     });
//     setTimeout(() => {
//       // const dataList = dataArray.sort(() => Math.random() > 0.5);
//       const total = dataArray.length;
//       for (let i = 0; i < total; i++) {
//         const random = Math.floor(Math.random() * total);
//         dataArray[random] = dataArray.splice(i, 1, dataArray[random])[0];
//       }
//
//       this.setState({
//         dataList: dataArray,
//         loading: false,
//       });
//     }, 1000);
//   }
//
//   componentDidMount() {
//     this.loadData();
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.dataList}
//           keys={({item}) => item}
//           refreshing={this.state.loading}
//           onRefresh={() => this.loadData()}
//           renderItem={({index, item}) => (
//             <View style={styles.item}>
//               <Text style={styles.text}>
//                 {index} - {item}
//               </Text>
//             </View>
//           )}
//         />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: '#f00',
  },
  text: {
    fontSize: 20,
  },
  more: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreTips: {
    marginLeft: 10,
  },
});

module.exports = FlatListScreen;
