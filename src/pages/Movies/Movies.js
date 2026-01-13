import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';
import { fetchMovies } from 'moviesApi';
import { MoviesMain } from 'pages/Movies/Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
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

    const controller = new AbortController();

    const getMovie = async () => {
      try {
        const resMovie = await fetchMovies('search/movie', {
          query: movieName,
          signal: controller.signal,
        });
        setMovies(resMovie.results);
      } catch (error) {
        if (error.code === 'ERR_CANCELED') {
          // Запрос отменён — просто игнорируем
          return;
        }
        console.error('Error when receiving movies:', error);
      }
    };
    getMovie();

    return () => {
      controller.abort();
      console.log('Movies: Компонент размонтирован, запрос прерван');
    };
  }, [movieName]);

  return (
    <MoviesMain>
      <SearchBox onSubmit={updateQueryString} />
      <MovieList movies={movies} />
    </MoviesMain>
  );
};

export default Movies;
