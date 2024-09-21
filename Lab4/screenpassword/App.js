import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { React, useState } from 'react';

export default function App() {
  const [text, setText] = useState('hello');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1, backgroundColor:'#23235B', margin:20, borderRadius:15}}>
        {/*Text - Header */}
        <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 25,fontWeight: 'bold',lineHeight: 29.3, color:'white', width:'80%',textAlign:'center'}}>PASSWORD GENERATOR</Text>
        </View>
        {/*Input password */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TextInput style={{borderWidth: 2, width: '90%', height: 55, backgroundColor: '#151537', color:'white', fontSize:20 }} />
        </View>

        {/*password lenght */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', paddingHorizontal:20}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 20,fontWeight: 'bold',lineHeight: 29.3, color:'white', width:'60%'}}>Password length</Text>
            <TextInput style={{fontSize:20,height: 33, fontWeight:'bold',backgroundColor: 'white', width:'40%', paddingLeft:10}}/>
        </View>

        {/*Include lower case letters */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', paddingLeft:20}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 20,fontWeight: 'bold',lineHeight: 29.3, color:'white', width:'85%'}}>Include lower case letters</Text>
            <CheckBox />
        </View>
        {/*Include upcase case letters */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', paddingLeft:20}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 20,fontWeight: 'bold',lineHeight: 29.3, color:'white', width:'85%'}}>Include upcase letters</Text>
            <CheckBox />
        </View>
        {/*Include number*/}
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft:20}}>
          <Text style={{fontFamily: 'Roboto', fontSize: 20, fontWeight: 'bold', lineHeight: 29.3, color: 'white'}}>Include number</Text>
          <CheckBox />
        </View>

        {/*Include special symbol */}
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft:20}}>
          <Text style={{fontFamily: 'Roboto', fontSize: 20, fontWeight: 'bold', lineHeight: 29.3, color: 'white'}}>Include special symbol</Text>
          <CheckBox />
        </View>

        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
           <TouchableOpacity style={{width:'90%', height:55, backgroundColor:'#3b3b98', justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
       
        

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9898C3',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

