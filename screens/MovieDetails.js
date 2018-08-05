import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class MovieDetails extends Component {
  static navigationOptions = {
    title: "Details"
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>{params.overview}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
