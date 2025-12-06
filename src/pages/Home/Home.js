import { useState, useEffect } from 'react';
import { fetchMovies } from 'moviesApi';
import MovieList from 'components/MovieList';
import { HomeTitle } from 'pages/Home/Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resMovies = await fetchMovies('trending/movie/day');
        setMovies(resMovies.results);
      } catch (error) {
        console.error('Error when receiving movies:', error);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
