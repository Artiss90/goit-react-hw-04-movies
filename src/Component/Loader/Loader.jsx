import React from 'react';
import Loader from 'react-loader-spinner';
import style from './Loader.module.css';

const MyLoader = () => {
  return (
    <Loader
      className={style.center}
      type="Oval"
      color="#00BFFF"
      height={100}
      width={100}
      // timeout={3000} //3 secs
    />
  );
};

export default MyLoader;
