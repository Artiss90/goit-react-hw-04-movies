import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingWeek } from 'Services/API';

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
        {trendMovie.length > 0 && (
          <ol>
            {trendMovie.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ol>
        )}
      </>
    );
  }
}

export default HomePage;
