import Cast from 'Component/Cast/Cast';
import Reviews from 'Component/Reviews/Reviews';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { fetchMovieId } from 'Services/API';
import style from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movieId: {},
  };
  async componentDidMount() {
    const propMovieId = this.props.match.params.movieId;
    const response = await fetchMovieId(propMovieId);
    this.setState({ movieId: response.data });
  }
  render() {
    const { movieId } = this.state;
    const { url, path } = this.props.match;

    console.log(this.props.location.pathname);
    return (
      <>
        <h1>MovieDetailsPage</h1>

        {movieId !== {} && (
          <>
            <h2>{movieId.title}</h2>
            <ul className={style.list}>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </ul>
            <Route path={`${path}/cast`} component={Cast} />
            <Route path={`${path}/reviews`} component={Reviews} />
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
