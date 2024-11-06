import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenAPI_02 from './page/ScreenAPI_02';
import ScreenAPI_03 from './page/ScreenAPI_03';

import store from './redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ScreenAPI_02">
            <Stack.Screen name="ScreenAPI_02" component={ScreenAPI_02} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenAPI_03" component={ScreenAPI_03} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <ScreenAPI_02/> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
