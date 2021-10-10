import Button from 'Component/Button/Button';
import ListMovie from 'Component/ListMovies/ListMovies';
import MyLoader from 'Component/Loader/Loader';
import Searchbar from 'Component/Searchbar/Searchbar';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchQueryMovie } from 'Services/API';
import style from './MoviesPage.module.css';
/* eslint react/prop-types: 1 */

class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  state = {
    articles: [],
    page: 1,
    loading: false,
    toResult: false,
  };

  componentDidMount() {
    if (this.props.location.search) {
      this.getListMovie();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.props.location.search;
    const prevQuery = prevProps.location.search;
    if (nextQuery !== prevQuery) {
      this.setState({ toResult: false });
      this.getListMovie();
    }
    console.log(nextQuery, prevQuery);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onSearch = query => {
    this.setState({ articles: [], page: 1 });
    this.getShowTitle(query);
  };

  getListMovie = () => {
    const { page, articles } = this.state;
    const { search } = this.props.location;
    // *убираем '?' из строки
    const queryModify = search.slice(1);
    console.log(queryModify);
    // *включаем лоадер
    this.toggleLoading();
    fetchQueryMovie(queryModify, page)
      .then(response => {
        if (response.data.results.length === 0) {
          this.setState({ toResult: true });
          return;
        }
        this.setState({
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

  getShowTitle = query => {
    const { history, location } = this.props;
    history.push({ pathname: location.pathname, search: `query=${query}` });
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
        {articles.length > 0 && <ListMovie list={articles} />}
        {articles.length > 0 && (
          <div className={style.containerButton}>
            <Button onClick={this.getLoadMore} aria-label="Load more">
              Load more
            </Button>
          </div>
        )}
      </>
    );
  }
}

export default MoviesPage;
