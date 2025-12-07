import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';
import { fetchMovies } from 'moviesApi';
import { MoviesMain } from 'pages/Movies/Movies.styled';

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
    <MoviesMain>
      <SearchBox onSubmit={updateQueryString} />
      <MovieList movies={movie} />
    </MoviesMain>
  );
};

export default Movies;
