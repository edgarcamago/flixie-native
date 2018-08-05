import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView
} from "react-native";
import MovieItem from "./screens/MovieItem";
import TEST_DATA from "./now_playing.json";
import { createStackNavigator } from "react-navigation";
import MovieDetails from "./screens/MovieDetails";
import NowPlaying from "./screens/NowPlaying";
import Popular from "./screens/Popular";

class MovieList extends React.Component {
  static navigationOptions = {
    title: "EdFLIX",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "red"
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={[styles.container, { paddingTop: 10 }]}
      >
        <Text style={{ paddingBottom: 5, color: "white" }}>NOW PLAYING</Text>
        <NowPlaying />
        <Text style={{ paddingBottom: 5, paddingTop: 10, color: "white" }}>
          POPULAR
        </Text>
        <Popular />
        <Text style={{ paddingBottom: 5, paddingTop: 10, color: "white" }}>
          POPULAR
        </Text>
        <Popular />
        <Text style={{ paddingBottom: 5, paddingTop: 10, color: "white" }}>
          POPULAR
        </Text>
        <Popular />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center"
  }
});

const RootStack = createStackNavigator(
  {
    MovieList: MovieList,
    NowPlaying: NowPlaying,
    Popular: Popular,
    Details: MovieDetails
  },
  {
    initialRouteName: "MovieList"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
