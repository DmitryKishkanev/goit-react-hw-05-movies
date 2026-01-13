import { useState, useEffect } from 'react';
import { fetchMovies } from 'moviesApi';
import MovieList from 'components/MovieList';
import { HomeTitle } from 'pages/Home/Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const getMovies = async () => {
      try {
        const resMovies = await fetchMovies('trending/movie/day', {
          signal: controller.signal,
        });
        setMovies(resMovies.results);
      } catch (error) {
        if (error.name === 'AbortError' || error.code === 'ERR_CANCELED') {
          // Запрос отменён — просто игнорируем
          return;
        }
        console.error('Error when receiving movies:', error);
      }
    };
    getMovies();

    return () => {
      controller.abort();
      console.log('Home: Компонент размонтирован, запрос прерван');
    };
  }, []);

  return (
    <main>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
