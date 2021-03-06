import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "white"
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.navigation.navigate("MovieList")}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 10
            }}
          >
            WHO WATCHIN?!
          </Text>
          <Image
            style={styles.image}
            source={require("../profileavatar.png")}
          />
          <Text style={{ marginTop: 5, color: "white", fontWeight: "bold" }}>
            Edgar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 100,
    width: 100
  }
});
