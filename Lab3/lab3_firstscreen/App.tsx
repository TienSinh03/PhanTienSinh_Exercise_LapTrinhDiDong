import React from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const App = () => {
  return (
    <View style={style.container}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <View style={style.circle}> </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={style.title}>grow {'\n'} your business</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={style.paragraph}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
         
        }}>
        <TouchableOpacity style={style.button}>Login</TouchableOpacity>
        <TouchableOpacity style={style.button}>Sign up</TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: screenWidth,
    flex: 1,
    backgroundColor: '#00ccf9',
  },
  circle: {
    width: 140,
    height: 140,
    borderColor: 'black',
    borderWidth: 15,
    borderRadius: 70,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 700,
    textTransform: 'uppercase',
    width: 200,
    height: 58,
    textAlign: 'center',
  },
  paragraph: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
    textAlign: 'center',
    width: 302,
    height: 36,
  },
  button: {
    width: 119,
    height: 48,
    gap: 0,
    borderRadius: 10,
    fontFamily: 'Roboto',
    backgroundColor:'#e3c000',
    textTransform:'uppercase',
    fontSize:20,
    fontWeight:700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
