import React, { Component } from 'react';
import { fetchCast } from 'Services/API';

class Cast extends Component {
  state = {
    cast: null,
  };
  async componentDidMount() {
    const response = await fetchCast;
    this.setState({ cast: response.data.cast });
  }
  render() {
    const { cast } = this.state;
    if (cast) {
      console.log(cast[0].name);
    }
    return (
      <>
        <h1>Cast</h1>
        {cast && cast.map(act => console.log(act.name, act.character))}
      </>
    );
  }
}

export default Cast;
