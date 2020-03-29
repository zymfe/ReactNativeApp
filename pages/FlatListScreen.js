import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
  RefreshControl,
  Platform,
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
        renderItem={({index, item}) => (
          <View
            style={[styles.item, {backgroundColor: 'blue'}]}
            onPress={() => console.log(444444)}>
            <Text
              style={[styles.text]}
              onPress={() => navigation.navigate('DetailScreen', {city: item})}>
              {item}
            </Text>
          </View>
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
    color: '#fff',
    fontSize: 20,
  },
});

module.exports = FlatListScreen;
