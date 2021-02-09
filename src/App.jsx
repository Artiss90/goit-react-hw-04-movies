import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'Page/HomePage/HomePage';
import MoviesPage from 'Page/MoviesPage/MoviesPage';
import MovieDetailsPage from 'Page/MovieDetailsPage/MovieDetailsPage';
import routes from './routes';
import Navigation from 'Component/Navigation/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer Limit={1} />
      </>
    );
  }
}

export default App;
