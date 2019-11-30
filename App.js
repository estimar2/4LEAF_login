import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>
            <AntDesign name="smileo" style={styles.title} />
            4LEAF-EDU
          </Text>

          <TextInput style={styles.text} placeholder="아이디를 입력해주세욤" />
          <TextInput
            style={styles.text}
            placeholder="비밀번호를 입력해주세욤"
            secureTextEntry={true}
          />
          <View style={styles.som}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.inner}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.inner}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30
  },
  text: {
    width: 300,
    height: 50,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    padding: 5
  },
  som: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline"
  },
  btn: {
    backgroundColor: "#f4e787",
    width: width / 3,
    height: 30,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  inner: {
    color: "#777"
  }
});

export default App;
