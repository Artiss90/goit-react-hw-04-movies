import React, { Component } from 'react';
import { fetchCast } from 'Services/API';

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const propId = this.props.match.params.movieId;
    const response = await fetchCast(propId);
    this.setState({ cast: response.data.cast });
  }
  render() {
    const { cast } = this.state;
    console.log(this.props.match.params.movieId);
    return (
      <>
        <h1>Cast</h1>
        {cast !== [] && cast.map(act => console.log(act.name, act.character))}
      </>
    );
  }
}

export default Cast;
