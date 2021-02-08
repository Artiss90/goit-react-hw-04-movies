import React, { Component } from 'react';
import { fetchCast } from 'Services/API';
import style from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const propId = await this.props.match.params.movieId;
    const response = await fetchCast(propId);
    this.setState({ cast: response.data.cast });
  }
  render() {
    const { cast } = this.state;
    console.log(this.props.match.params.movieId);
    return (
      <>
        <h2>Cast</h2>
        {/* // *с помощью popularity регулируем количество отображаемых актёров  */}
        {cast.length > 0 && (
          <ul>
            {cast
              .filter(actor => actor.popularity > 5)
              .map(actor => (
                <li key={actor.id} className={style.list}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    alt={`portrait ${actor.name}`}
                  />
                  <p className={style.name}>{actor.name}</p>
                  <p className={style.role}>
                    Role: {actor.character || 'minor roles'}
                  </p>
                </li>
              ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;