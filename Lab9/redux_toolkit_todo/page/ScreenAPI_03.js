import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import { addTodo, editTodo } from "../redux/slices/todoSlice";


const ScreenAPI_03 = ({ navigation, route }) => {
  
  const dispatch = useDispatch();
  
  const [task, setTask] = useState({});

  useEffect(() => {
    if (route.params?.task !== undefined && route.params?.task !== null) {
      setTask(route.params?.task);
    }
  }, [route.params]);

  const handleJob = () => {
    if(route.params?.specify === 'ADD') {
        dispatch(addTodo(task));
    } else {
        dispatch(editTodo(task));
    }
    setTask({content:"", id:""});
    navigation.navigate('ScreenAPI_02', { textName: route.params?.textName });

  };
  
  
  return (
    <SafeAreaView style={styles.container}>
      {/* View nav information  */}
      <View style={styles.navInfo}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/muiten.png")}
            style={{ resizeMode: "cover", width: 22, height: 22 }}
          />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/userimage.png")}
            style={{ resizeMode: "cover", marginRight: 10 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 30,
                color: "#00000",
                fontWidth: "bold",
                paddingLeft: 10,
              }}
            >
              {route.params?.textName}
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 22, color: "#171a1f" }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      </View>

      {/* View body */}
      <View style={styles.body}>
        <Text style={styles.titleHeader}>{route.params?.specify} YOUR JOB</Text>

        <View style={{ flex: 2 }}>
          <View style={styles.inputEmail}>
            <Image
              source={require("../assets/listicon.png")}
              style={{
                resizeMode: "cover",
                width: 27,
                height: 27,
                marginHorizontal: 10,
              }}
            />
            <TextInput
              placeholder="Input your job"
              style={styles.textInput}
              value={task.content}
              onChangeText={text => {setTask({...task, content: text})}}
              onSubmitEditing={handleJob}
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.button}

            onPress={() => {
                handleJob();                
              }
            }
          >
            <Text style={styles.textButton}>FINISH -> </Text>
          </TouchableOpacity>
        </View>

        {/* View image note book */}
        <View style={styles.image}>
          <Image
            source={require("../assets/Image 95.png")}
            style={{ resizeMode: "cover", width: "60%", height: 170 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40,
  },

  navInfo: {
    flexDirection: "row-reverse",
    margin: 20,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  body: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 20,
  },
  inputEmail: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: 10,

    width: 334,
    borderRadius: 10,
    marginTop: 40,
  },
  textInput: {
    fontSize: 14,
    lineHeight: 21,
    width: "85%",
  },
  titleHeader: {
    fontSize: 32,
    lineHeight: 48,
    color: "#171A1F",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#00bbd6",
    height: 40,
    width: 190,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 5,
    width: 271,
    height: 271,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ScreenAPI_03;
