import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import React, { useState } from 'react';

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

const Item = ({name, image, shop}) => (
  <View style={{ flexDirection:'row',    backgroundColor: 'white',    padding: 20,    marginVertical: 8,    marginHorizontal: 16,  }}>
      <View style={{width:'30%'}}>
        <Image source={{uri: image}} style={{width: 74, height: 74}}/>
      </View>
      
      <View style={{width:'70%', flexDirection:'row', justifyContent:'space-around'}}>
        <View style={{ flexDirection:'column', backgroundColor: 'white', width:'60%'}}>
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ marginTop:15,fontSize: 15}}>Shop  <Text style={{ fontSize: 15, color:'red'}}>{shop}</Text></Text>
        </View>
        
        <TouchableOpacity style={{width:88, height:38, backgroundColor:'#F31111', justifyContent:'center', alignItems:'center', marginTop:15}}>
              <Text style={{ fontSize: 15, color: 'white'  }}>CHAT</Text>
        </TouchableOpacity>      
      </View>
  </View>
);

export default function App() {
  cost [data, setData] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {/* header - list product */}
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{backgroundColor:'#1BA9FF', height: 42, flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingHorizontal:15}}>
          <Image source={require('./assets/ant-design_arrow-left-outlined.png')} style = {{resizeMode:'cover'}}/>
          <Text style={{color:'white', fontSize:15}}>Chat</Text>
          <Image source={require('./assets/bi_cart-check.png')} style = {{resizeMode:'cover'}}/>
        </View>

        <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:35, paddingVertical:15}}>
          <Text style={styles.title}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!</Text>
        </View>

        <FlatList
          data={DATA}
          renderItem={({item}) => <Item name={item.name} image={item.image} shop={item.shop} />}
          keyExtractor={item => item.id}
        />

      </View>
      <View style={{justifyContent:'flex-end'}}>
            <View style={{backgroundColor:'#1BA9FF', height: 42, flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingHorizontal:15}}>
              <Image source={require('./assets/menu.png')} style = {{resizeMode:'cover'}}/>
              <Image source={require('./assets/home.png')} style = {{resizeMode:'cover'}}/>
              <Image source={require('./assets/back.png')} style = {{resizeMode:'cover'}}/>
            </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E5E5E5',
    marginTop: 40,
  },
});
