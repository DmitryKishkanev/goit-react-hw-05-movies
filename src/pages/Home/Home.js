import { useState, useEffect } from 'react';
import { fetchMovies } from 'moviesApi';
import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resMovies = await fetchMovies('trending/movie/day');
        setMovies(resMovies.results);
      } catch (error) {
        console.error('Ошибка при получении фильмов:', error);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
