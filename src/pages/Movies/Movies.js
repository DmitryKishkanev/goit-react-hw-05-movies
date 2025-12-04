import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';
import { fetchMovies } from 'moviesApi';

const Movies = () => {
  const [movie, setMovie] = useState([]);
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

    const getMovie = async () => {
      try {
        const resMovie = await fetchMovies('search/movie', movieName);
        setMovie(resMovie.results);
      } catch (error) {
        console.error('Error when receiving movies:', error);
      }
    };
    getMovie();
  }, [movieName]);

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      <MovieList movies={movie} />
    </main>
  );
};

export default Movies;
