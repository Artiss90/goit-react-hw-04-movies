import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ListMovie = ({ list, location }) => {
  return (
    <ol>
      {list.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: { from: location.pathname },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default withRouter(ListMovie);
