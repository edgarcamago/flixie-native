import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import MovieItem from "./MovieItem";
import { createStackNavigator } from "react-navigation";
import MovieDetails from "./MovieDetails";

export default class NowPlaying extends React.Component {
  static navigationOptions = {
    title: "EdFLIX"
  };

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loaded: false
    };
  }

  async componentDidMount() {
    const timeout = ms => new Promise(res => setTimeout(res, ms));
    let url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=8c54b08b120d2d59bdffb9c090467daa";
    let response = await fetch(url);
    let data = await response.json();
    await timeout(3000);
    this.setState({
      movies: data.results,
      loaded: true
    });
  }

  render() {
    if (!this.state.loaded) {
      return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
          data={this.state.movies}
          renderItem={({ item }) => (
            <MovieItem {...item} navigation={this.props.navigation} />
          )}
        />
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
