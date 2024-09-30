import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';

const DATA = [
    {
        "id": "sp001",
        "name": "ca nau lau, nau mi mini",
        "shop": "Devang",
        "image": "https://picsum.photos/200"
    },
    {
        "id": "sp002",
        "name": "ca 1kg kho ga bo toi",
        "shop": "LTD food",
        "image": "https://picsum.photos/201"
    },
    {
        "id": "sp003",
        "name": "xe can cau da nang",
        "shop": "The gioi do choi",
        "image": "https://picsum.photos/202"
    },
    {
        "id": "sp004",
        "name": "do choi dang mo hinh",
        "shop": "The gioi do choi",
        "image": "https://picsum.photos/203"
    },
    {
        "id": "sp005",
        "name": "Lanh dao gian don",
        "shop": "Minh Long book",
        "image": "https://picsum.photos/204"
    },
    {
        "id": "sp006",
        "name": "hieu long con tre",
        "shop": "Minh Long book",
        "image": "https://picsum.photos/205"
    },
    {
        "id": "sp007",
        "name": "Harry potter",
        "shop": "Minh Long book",
        "image": "https://picsum.photos/206"
    },
    {
        "id": "sp008",
        "name": "sach day lap trinh Java",
        "shop": "Tien Dat book",
        "image": "https://picsum.photos/207"
    }
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Chat</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!</Text>
      </View>
      {/**<FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
