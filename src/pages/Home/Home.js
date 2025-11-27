import MovieList from 'components/MovieList';
import { getMovies } from 'moviesApi';

const Home = () => {
  const movies = getMovies();
  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
