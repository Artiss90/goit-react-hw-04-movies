import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
/* eslint react/prop-types: 1 */

const ListMovie = ({ list, location }) => {
  return (
    <ol>
      {list.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: { from: location.pathname },
              search: location.search,
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ol>
  );
};

ListMovie.propTypes = {
  list: PropTypes.array,
  location: PropTypes.object,
};

export default withRouter(ListMovie);
