import axios from 'axios';
import { TMDB_API_KEY } from 'config';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = `Bearer ${TMDB_API_KEY}`;

export async function fetchMovies(endpoint, query = '') {
  try {
    const response = await axios.get(endpoint, {
      params: {
        query,
        language: 'en-US',
        page: 1,
        // include_adult: false,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при получении фильмов:', error);
    throw error;
  }
}

fetchMovies('trending/movie/day').then(result => console.log(result));

const movies = [
  { id: 'm-1', name: 'Movie 1' },
  { id: 'm-2', name: 'Movie 2' },
  { id: 'm-3', name: 'Movie 3' },
];

export const getMovies = () => {
  return movies;
};

export const getMovieByName = movieName => {
  return movies.find(
    movie => movie.name.toLowerCase().trim() === movieName.toLowerCase().trim(),
  );
};

export const getMovieById = movieId => {
  return movies.find(movie => movie.id === movieId);
};
