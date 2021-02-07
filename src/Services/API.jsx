import axios from 'axios';

const KEY_API = '684e40070f4c4b96cdac02d57475a68e';
// https://api.themoviedb.org/3/movie/550?api_key=684e40070f4c4b96cdac02d57475a68e
// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=
// https://api.themoviedb.org/3/movie/550?api_key=684e40070f4c4b96cdac02d57475a68e

export const fetchTrendingWeek = axios.get(
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY_API}`,
);

export const fetchCast = axios.get(
  `https://api.themoviedb.org/3/movie/464052/credits?api_key=${KEY_API}`,
);
