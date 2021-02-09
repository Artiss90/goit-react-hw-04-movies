import Button from 'Component/Button/Button';
import MyLoader from 'Component/Loader/Loader';
import Searchbar from 'Component/Searchbar/Searchbar';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchQueryMovie } from 'Services/API';

class MoviesPage extends Component {
  state = {
    querySearch: '',
    articles: [],
    page: 1,
    loading: false,
    toResult: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.state.querySearch;
    const prevQuery = prevState.querySearch;
    if (nextQuery !== prevQuery) {
      this.setState({ toResult: false });
      this.getListMovie();
    }
    console.log(!!this.toResult);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onSearch = query =>
    this.setState({ querySearch: query, articles: [], page: 1 });

  getListMovie = () => {
    const { querySearch, page, articles } = this.state;
    // *включаем лоадер
    this.toggleLoading();
    fetchQueryMovie(querySearch, page)
      .then(response => {
        if (response.data.results.length === 0) {
          this.setState({ toResult: true });
          return;
        }
        return this.setState({
          articles: [...articles, ...response.data.results],
          page: page + 1,
        });
      })
      .catch(error => this.setState({ error }))
      .finally(
        // *выключаем лоадер
        this.toggleLoading,
      );
  };
  getLoadMore = () => {
    this.getListMovie();
  };

  toggleLoading = () => {
    this.setState(({ loading }) => ({
      loading: !loading,
    }));
  };
  render() {
    const { loading, articles, toResult } = this.state;
    return (
      <>
        <Searchbar onSubmitForm={this.onSearch} />
        {loading && <MyLoader onLoad={loading} />}
        {toResult && <p>No result</p>}
        {articles.length > 0 && (
          <ol>
            {articles.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ol>
        )}
        {articles.length > 0 && (
          <Button onClick={this.getLoadMore} aria-label="Load more">
            Load more
          </Button>
        )}
      </>
    );
  }
}

export default MoviesPage;
