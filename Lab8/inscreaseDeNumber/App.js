import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {createStore} from 'redux';
import {Provider, useDispatch, useSelector } from 'react-redux';


var reducer = (state = {count : 0}, action ) => {
  switch (action.type) {
    case 'INC':
      return {count: state.count + 1};

    case 'DEC':
      return {count: state.count - 1};

    default:
      return state;
  }
}

var store = createStore(reducer, {count: 0})

var Counter = () => {
  var count = useSelector((state) => state.count); //lấy giá trị count từ store
  var dispatch = useDispatch(); //lấy dispatch để gửi hành động (action) tới reducer.
  return (
    <View>
      <Text style={{fontSize:24}}>{count}</Text>
      <Button title="Increase" onPress={() => dispatch({type: 'INC'})} />
      <Button title="Decrease" onPress={() => dispatch({type: 'DEC'})} />
    </View>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter/>
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
