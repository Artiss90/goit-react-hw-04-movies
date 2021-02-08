import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'Page/HomePage/HomePage';
import MoviesPage from 'Page/MoviesPage/MoviesPage';
import MovieDetailsPage from 'Page/MovieDetailsPage/MovieDetailsPage';
import routes from './routes';
import Navigation from 'Component/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </>
    );
  }
}

export default App;
