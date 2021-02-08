import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={style.Nav}>
      <li className={style.Item}>
        <NavLink
          exact
          to={routes.home}
          className={style.Header}
          activeClassName={style.Header__Active}
        >
          HomePage
        </NavLink>
      </li>
      <li className={style.Item}>
        <NavLink
          exact
          to={routes.movies}
          className={style.Header}
          activeClassName={style.Header__Active}
        >
          MoviesPage
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
