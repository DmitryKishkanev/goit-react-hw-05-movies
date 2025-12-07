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
      },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при получении фильмов:', error);
    throw error;
  }
}
