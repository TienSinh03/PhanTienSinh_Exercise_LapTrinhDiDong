import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 1]}
        style={{ flex: 1 }}>
        <View style={styles.logo}>
          <Text style={styles.textLogo}>Code</Text>
        </View>

        <View style={styles.verfication}>
          <Text style={styles.textVerfi}>Verfication</Text>
        </View>

        <View style={styles.enterCode}>
          <Text style={styles.paragraph}>
            Enter ontime password sent on ++849092605798
          </Text>
          <View style={styles.inputCode}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
          </View>
        </View>

        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button}>verify code</TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'end',
  },
  textLogo: {
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    fontSize: 60,
    fontWeight: 700,
    lineHeight: 70.31,
  },
  verfication: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textVerfi: {
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23.44,
    width: 302,
    height: 53,
    textAlign: 'center',
  },

  enterCode: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  paragraph: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 17.58,
    textAlign: 'center',
    width: 302,
    height: 53,
  },
  inputCode: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
    margin: 35
  },
  button: {
    width: 339,
    height: 50,
    backgroundColor: '#E3C000',
    textTransform:'uppercase',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 21.09,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
