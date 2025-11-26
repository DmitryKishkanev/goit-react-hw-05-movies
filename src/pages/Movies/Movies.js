import { useSearchParams } from 'react-router';
import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox';
import { getMovies } from 'moviesApi';

const Movies = () => {
  const movies = getMovies();
  const [searchParams, setsearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const visibleMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(movieName.toLowerCase()),
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setsearchParams(nextParams);
  };
  return (
    <main>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} />
    </main>
  );
};

export default Movies;
