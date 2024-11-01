import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import store from './redux/store';
import ScreenAPI_01 from './component/ScreenAPI_01';
import ScreenAPI_02 from './component/ScreenAPI_02';
import ScreenAPI_03 from './component/ScreenAPI_03';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Bọc toàn bộ ứng dụng trong <Provider>
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ScreenAPI_01">
            <Stack.Screen name="ScreenAPI_01" component={ScreenAPI_01} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenAPI_02" component={ScreenAPI_02} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenAPI_03" component={ScreenAPI_03} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <ScreenAPI_02/> */}
    </Provider>
  );
}
