import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'Page/HomePage/HomePage';
import './App.css';
import MoviesPage from 'Page/MoviesPage/MoviesPage';
import MovieDetailsPage from 'Page/MovieDetailsPage/MovieDetailsPage';
import Cast from 'Page/Cast/Cast';
import Reviews from 'Page/Reviews/Reviews';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/movieId" component={MovieDetailsPage} />
          <Route path="/cast" component={Cast} />
          <Route path="/reviews" component={Reviews} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
