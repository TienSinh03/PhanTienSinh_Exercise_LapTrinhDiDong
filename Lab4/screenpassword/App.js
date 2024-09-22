import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { React, useState } from 'react';

export default function App() {
  const [passLenght, setLenght] = useState("");
  const [lowercaseLetter, setSelectLower] = useState(false);
  const [upcaseLetter, setSelectUpcase] = useState(false);
  const [number, setSelectNumber] = useState(false);
  const [specialSymbol, setSelectSpecial] = useState(false);
  const [generateInput, setGenerateInput] = useState("");

  function handleChange(pass) {
    setLenght(pass.target.value);
  }

  /** Function generate password */
  function generatePassword() {

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChart = '0123456789';
    const symbols = '!@#$%^&*()_+{}:"<>?[];,./';

    let password='';
    let digit='';

    if(lowercaseLetter) {
      digit += lowercase;
    } 

    if(upcaseLetter) {
      digit += uppercase;
    } 

    if(number) {
      digit += numberChart;
    } 

    if(specialSymbol) {
      digit += symbols;
    }

  /**Radom digit */
   for (let i = 0; i < parseInt(passLenght); i++) {
        if(digit.length != 0) {
          const randomIndex = Math.floor(Math.random() * digit.length);
          password += digit[randomIndex];
        } else {
          password = 'Select option please!';
        }
        
    }

    setGenerateInput(password);

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1, backgroundColor:'#23235B', margin:20, borderRadius:15}}>

        {/*Text - Header */}
        <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 25,fontWeight: 'bold',lineHeight: 29.3, color:'white', width:'80%',textAlign:'center'}}>PASSWORD GENERATOR</Text>
        </View>

        {/*Input password */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{borderWidth: 2, width: '90%', height: 55, backgroundColor: '#151537', color:'white', fontSize:20, textAlign:'center' }}>  {generateInput}  </Text>
        </View>

        {/*password lenght */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', paddingHorizontal:20}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 20,fontWeight: 'bold',lineHeight: 29.3, color:'white', width:'60%'}}>Password length</Text>
            <TextInput style={{fontSize:20,height: 33, fontWeight:'bold',backgroundColor: 'white', width:'40%', paddingLeft:10}}
             value={passLenght}
             onChange={
               handleChange
               /** case 2: pass => setLenght(pass.target.value) */
             }/>
        </View>

        {/*Include lower case letters */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', paddingLeft:20}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 20,fontWeight: 'bold',lineHeight: 29.3, color:'white', width:'85%'}}>Include lower case letters</Text>
            <CheckBox checked={lowercaseLetter} onPress = {() => setSelectLower(!lowercaseLetter)}/>
        </View>

        {/*Include upcase case letters */}
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', paddingLeft:20}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 20,fontWeight: 'bold',lineHeight: 29.3, color:'white', width:'85%'}}>Include upcase letters</Text>
            <CheckBox  checked={upcaseLetter} onPress = {() => setSelectUpcase(!upcaseLetter)}/>
        </View>

        {/*Include number*/}
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft:20}}>
          <Text style={{fontFamily: 'Roboto', fontSize: 20, fontWeight: 'bold', lineHeight: 29.3, color: 'white'}}>Include number</Text>
          <CheckBox checked={number} onPress = {() => setSelectNumber(!number)}/>
        </View>

        {/*Include special symbol */}
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft:20}}>
          <Text style={{fontFamily: 'Roboto', fontSize: 20, fontWeight: 'bold', lineHeight: 29.3, color: 'white'}}>Include special symbol</Text>
          <CheckBox checked={specialSymbol} onPress = {() => setSelectSpecial(!specialSymbol)}/>
        </View>

        {/**Button Generate password */}
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
           <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:'90%', height:55, backgroundColor:'#3b3b98'}
           } onPress ={generatePassword}>
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
  }
});

