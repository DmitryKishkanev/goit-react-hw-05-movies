import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox';
import { getMovieByName } from 'moviesApi';
import MovieList from 'components/MovieList';
// import { getMovies } from 'moviesApi';

const Movies = () => {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    setSearchParams(name ? { name } : {});

    // setsearchParams({ name });
    // if (name) {
    //   setsearchParams({ name });
    // }
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }

    const fatchMovie = getMovieByName(movieName);
    setMovie(fatchMovie);
  }, [movieName]);

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      <MovieList movies={movie ? [movie] : []} />
    </main>
  );
};

export default Movies;
