import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image, TextInput,FlatList, TouchableOpacity } from 'react-native';
import React,{useEffect, useState} from 'react';


const data = [
    {
        'id': 1, 
        'name': 'Twinkle', 
        'image': '../assets/avatar.png', 
        'job': [
            'To check email', 
            'UI task web page', 
            'Learn javascript basic',
            'Learn HTML advanced',
            'Medical App UI',
            'Learn Java'
        ]
    },
]

const Item = ({job}) => (
    <View style={styles.searchItem}>        
            <View style={{paddingHorizontal:10, paddingTop:10}}>
                <Text style={styles.searchItemTitle}>{job}</Text>
            </View>
          
    </View>
  );
  

const ScreenAPI_01 = ({navigation,route}) => {
    return (
        <SafeAreaView style={styles.container}>
           {/* View header */}
           <View style={styles.header}>
                {/* View nav information  */}
                <View style={styles.navInfo}>
                    <Image source={require('../assets/muiten.png')} style = {{resizeMode:'cover', width: 22, height: 22, }}/>

                    <View style={{flexDirection:'row', alignItems:'center'}}>
                         <Image source={require('../assets/userimage.png')} style = {{resizeMode:'cover', marginRight:10}}/>
                         <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize: 20, lineHeight: 30, color: '#00000', fontWidth: 'bold', paddingLeft:10}}>Hi Twinkle</Text>
                                <Text style={{fontSize: 14, lineHeight: 22, color: '#171a1f'}}>Have agrate day a head</Text>
                         </View>
                    </View>
                </View>
                <View style={{flex:2}}>
                    <View style={styles.inputEmail}>
                        <Image source={require('../assets/iconSearch.png')} style = {{resizeMode:'cover', width: 27, height: 27, marginHorizontal:10}}/>
                        <TextInput placeholder="Search" style={styles.textInput}/>
                    </View>
                </View>
           </View>

           {/* View list */}
           <View style={styles.list}>
                {/* display list */}
                <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={({item}) => <Item job={item.job} />}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                />
                </View>
           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop:40  
    },
    header: {
        flex:3,
    },
    navInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems:'center',
    },
    inputEmail:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:1,
        paddingVertical:10,
    
        width:334,
        borderRadius:10,
    },
    list: {
        flex:7,
    }

});

export default ScreenAPI_01;