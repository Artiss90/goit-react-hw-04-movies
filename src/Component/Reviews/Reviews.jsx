import React, { Component } from 'react';
import { fetchReviewsMovie } from 'Services/API';
import style from './Reviews.module.css';

class Reviews extends Component {
  state = {
    review: [],
  };
  async componentDidMount() {
    const propId = await this.props.match.params.movieId;
    const response = await fetchReviewsMovie(propId);
    this.setState({ review: response.data.results });
  }
  render() {
    const { review } = this.state;
    return (
      <>
        <h2>Reviews</h2>
        {review.length === 0 ? (
          <p className={style.content}>
            'We don't have any reviews for this movie'
          </p>
        ) : (
          <ul className={style.list}>
            {review.map(rew => (
              <li key={rew.id}>
                <p className={style.name}>{rew.author}</p>
                <p className={style.content}>{rew.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
