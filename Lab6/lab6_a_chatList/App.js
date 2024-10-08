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

import React, { useState,useEffect } from 'react';

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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://66fa5539afc569e13a9b4585.mockapi.io/product/product')
      .then((response) => response.json()) // Parse JSON data from the response
      .then((json) => {
        setData(json); // Set the fetched data to state
        setLoading(false); // Stop loading indicator
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

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
          data={data}
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
