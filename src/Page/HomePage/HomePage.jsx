import ListMovie from 'Component/ListMovies/ListMovies';
import React, { Component } from 'react';
import { fetchTrendingWeek } from 'Services/API';
/* eslint react/prop-types: 1 */

class HomePage extends Component {
  state = {
    trendMovie: [],
  };
  async componentDidMount() {
    const response = await fetchTrendingWeek;
    this.setState({ trendMovie: response.data.results });
  }
  render() {
    const { trendMovie } = this.state;
    // console.log(trendMovie);
    return (
      <>
        <h1>HomePage</h1>
        {trendMovie.length > 0 && <ListMovie list={trendMovie} />}
      </>
    );
  }
}

export default HomePage;
