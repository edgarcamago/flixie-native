import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "red"
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.navigation.navigate("MovieList")}
        >
          <Text style={{ color: "white" }}>WHO WATCHIN?!</Text>
          <Image
            style={styles.image}
            source={require("../profileavatar.png")}
          />
          <Text style={{ color: "white" }}>Edgar</Text>
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
