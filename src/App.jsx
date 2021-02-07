import { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'Page/HomePage/HomePage';
import MoviesPage from 'Page/MoviesPage/MoviesPage';
import MovieDetailsPage from 'Page/MovieDetailsPage/MovieDetailsPage';
import Cast from 'Page/Cast/Cast';
import Reviews from 'Page/Reviews/Reviews';
import style from './App.module.css';
// import axios from 'axios';

class App extends Component {
  render() {
    return (
      <>
        <ul className={style.Nav}>
          <li>
            <NavLink
              exact
              to="/"
              className={style.Header}
              activeClassName={style.Header__Active}
            >
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/movies"
              className={style.Header}
              activeClassName={style.Header__Active}
            >
              MoviesPage
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/movies/:movieId"
              className={style.Header}
              activeClassName={style.Header__Active}
            >
              MovieDetailsPage
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/movies/:movieId/cast"
              className={style.Header}
              activeClassName={style.Header__Active}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/movies/:movieId/reviews"
              className={style.Header}
              activeClassName={style.Header__Active}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
