import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
/* eslint react/prop-types: 1 */

const ListMovie = ({ list, location }) => {
  return (
    <ul className="list-group">
      {list.map(movie => (
        <li
          key={movie.id}
          className="list-group-item d-flex justify-content-between align-items-start bg-dark text-white"
        >
          {movie?.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
              class="rounded"
              alt=""
            ></img>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              class="rounded"
              alt=""
            ></img>
          )}
          <div class="ms-2 me-auto">
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location.pathname },
                search: location.search,
              }}
              className="d-block link-info fw-bold"
            >
              {movie.title}
            </Link>
            release date: {movie.release_date.slice(0, 4)}
          </div>
        </li>
      ))}
    </ul>
  );
};

ListMovie.propTypes = {
  list: PropTypes.array,
  location: PropTypes.object,
};

export default withRouter(ListMovie);
