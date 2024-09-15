import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 1]}
        style={{ flex: 1 }}>
        <View style={styles.viewFlex2}>
          <View style={styles.cricle}></View>
        </View>
        <View style={styles.viewFlex1}>
          <Text style={styles.title}>grow {'\n'} your business</Text>
        </View>
        <View style={styles.viewFlex1}>
          <Text style={styles.paragraph}>
            We will help you to grow your business using online server
          </Text>
        </View>

        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button}>Login</TouchableOpacity>
          <TouchableOpacity style={styles.button}>Sign up</TouchableOpacity>
        </View>

        <View style={styles.viewFooter}>
          <Text style={styles.textFooter}>HOW WE WORK?</Text>
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
    // width:screenWidth
  },
  viewFlex2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFlex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cricle: {
    borderColor: 'black',
    borderWidth: 15,
    width: 140,
    height: 140,
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
  viewButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  button: {
    width: 119,
    height: 48,
    fontFamily: 'Roboto',
    backgroundColor: '#e3c000',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFooter :{
    flex: 1,
    alignItems:'center'
  },
  textFooter: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
  },
});
