import { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'Page/HomePage/HomePage';
import MoviesPage from 'Page/MoviesPage/MoviesPage';
import MovieDetailsPage from 'Page/MovieDetailsPage/MovieDetailsPage';
import style from './App.module.css';

class App extends Component {
  render() {
    return (
      <>
        <ul className={style.Nav}>
          <li className={style.Item}>
            <NavLink
              exact
              to="/"
              className={style.Header}
              activeClassName={style.Header__Active}
            >
              HomePage
            </NavLink>
          </li>
          <li className={style.Item}>
            <NavLink
              exact
              to="/movies"
              className={style.Header}
              activeClassName={style.Header__Active}
            >
              MoviesPage
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
