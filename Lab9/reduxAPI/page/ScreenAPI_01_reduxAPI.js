import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image, TextInput,FlatList, TouchableOpacity } from 'react-native';
import React,{useEffect, useState,useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/action';


// View tasks for list job
const Task = ({taskId,jobName, navigation, onDelete,textName}) => (
   <View style={[styles.task, styles.elevation]}>

          {/* content job and icon tick */}
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity style={{marginRight:10}}>
                <Image source={require('../assets/tickl.png')} style = {{resizeMode:'cover', width: 27, height: 27, }}/>
            </TouchableOpacity>

            <View style={styles.textWrapper}>
              <Text style={styles.text}>{jobName}</Text>
            </View>
          </View>

          {/* Button execute */}
          <View style={{flexDirection:'row', alignItems:'center'}}>
            {/* EDIT */}
            <TouchableOpacity style={{marginRight:15}}             
            >
                <Image source={require('../assets/edit.png')} style = {{resizeMode:'cover', width: 27, height: 27, }}/>
            </TouchableOpacity>

            {/* Delete */}
            <TouchableOpacity 
              onPress={() => onDelete()}
            >
                <Image source={require('../assets/icons8-delete-27.png')} style = {{resizeMode:'cover', width: 27, height: 27, }}/>
            </TouchableOpacity>
          </View>
          
    </View>
);
  

function ScreenAPI_01 ({navigation,route}) {


    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <SafeAreaView style={styles.container}>
           {/* View header */}
           <View style={styles.header}>
                {/* View nav information  */}
                <View style={styles.navInfo}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/muiten.png')} style = {{resizeMode:'cover', width: 22, height: 22, }}/>
                  </TouchableOpacity>

                    <View style={{flexDirection:'row', alignItems:'center'}}>
                         <Image source={require('../assets/userimage.png')} style = {{resizeMode:'cover', marginRight:10}}/>
                         <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize: 20, lineHeight: 30, color: '#00000', fontWidth: 'bold', paddingLeft:10}}>Phan Tien Sinh</Text>
                                <Text style={{fontSize: 14, lineHeight: 22, color: '#171a1f'}}>Have agrate day a head</Text>
                         </View>
                    </View>
                </View>
                <View style={{flex:3}}>
                    <View style={styles.inputEmail}>
                        <Image source={require('../assets/iconSearch.png')} style = {{resizeMode:'cover', width: 27, height: 27, marginHorizontal:10}}/>
                        <TextInput placeholder="Search" style={styles.textInput}/>
                    </View>
                </View>
           </View>

           {/* View list */}
           <View style={styles.list}>
            
            <View style={{flex:6}}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <Task
                    key={item.id}
                    jobName={item.content}
                    onDelete={() => handelDelete(item.id)}
                    taskId={item.id}
                  />
                )}
                keyExtractor={item => item.id}
                scrollEnabled={true}
                  />
            </View>

                {/* Button Add */}
                 <View style={{flex:2,justifyContent:'flex-start'}}>
                  <TouchableOpacity style={styles.buttonAdd}                   
                  >
                      <Image source={require('../assets/iconPlus.png')} style = {{resizeMode:'cover', width: 27, height: 27, }}/>
                  </TouchableOpacity>
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
        width:'90%'
    },
    inputEmail:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:1,
        paddingVertical:10,
    
        width:'90%',
        borderRadius:10,
        marginLeft:20,
    },
    list: {
        flex:7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(222, 225, 230, 0.47)",
        padding: 15,
        borderRadius: 24,
        margin: 10,
        width: '85%',
        marginLeft:30
     },
     textWrapper: {
        // flex: 1,
     },
     text: {
        fontSize: 16,
        fontWeight:'bold',
     },
     delete: {
        color: "red",
     },
     elevation: {
      elevation: 20,
      shadowColor: 'black',
    },
    buttonAdd:{backgroundColor:'#00BDD6', marginTop:25,width: 50, height: 50, borderRadius: 25, justifyContent:'center', alignItems:'center'}
});

export default ScreenAPI_01;