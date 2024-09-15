import { Text, Image, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 1]}
        style={{ flex: 1 }}>
        <View style={styles.viewLock}>
          <Image
            source={require('./assets/icons8-lock-105.png')}
            style={styles.imageLock}
          />
        </View>
        <View style={styles.viewText}>
         <Text style={styles.title}>FORGET PASSWORD</Text>
        </View>
        <View style={styles.email}>
            <Text style={styles.paragraph}>
              Provide your account’s email for which you want to reset your
              password
            </Text>

            <View style={styles.inputEmail}>
              <View style={styles.imageEmail}>
                <Image source={require('./assets/icons8-email-25.png')} />
              </View>
              <TextInput style= {styles.input} placeholder="Email"/>
            </View>
          </View>

        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button}>NEXT</TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  viewLock: {
    flex: 2,
    justifyContent: 'end',
    alignItems: 'center',
  },
  viewText: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-around'
  },
  imageLock: {
    width: 125,
    height: 150,
  },
  imageEmail: {
    width: 48,
    height: 45,
  
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  email: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  paragraph: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 17.58,
    textAlign: 'center',
    width: 302,
    height: 32,
  },
  inputEmail: {
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    width: 305,
    height: 45,
    backgroundColor:'#C4C4C4'
  },
  input :{
    height: 45,
    width: 260 ,
    paddingLeft: 5,
    fontSize: 15,
    fontWeight: 500
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
    margin:40
  },
  button: {
    width: 305,
    height: 48,
    fontFamily: 'Roboto',
    backgroundColor: '#e3c000',
    fontSize: 20,
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
