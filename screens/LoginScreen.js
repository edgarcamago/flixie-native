import React, {
  Component
} from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text> Click to see what's playing now!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
