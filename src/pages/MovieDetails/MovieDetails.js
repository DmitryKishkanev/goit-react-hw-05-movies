import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { useRef, useState, useEffect, Suspense } from 'react';
import { fetchMovies } from 'moviesApi';
import BackLink from 'components/BackLink';
import MoviesItem from 'components/MoviesItem';
import {
  MovieMain,
  MovieDetailsTitle,
  MovieDetailsList,
  MovieDetailsItem,
} from 'pages/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const controller = new AbortController();

    const getMovies = async () => {
      try {
        const resMovie = await fetchMovies(`movie/${movieId}`, {
          signal: controller.signal,
        });
        setMovie(resMovie);
      } catch (error) {
        if (error.name === 'AbortError' || error.code === 'ERR_CANCELED') {
          // Запрос отменён — просто игнорируем
          return;
        }
        console.error('Error receiving movie:', error);
      }
    };
    getMovies();

    return () => {
      controller.abort();
      console.log('MovieDetails: Компонент размонтирован, запрос прерван');
    };
  }, [movieId]);

  if (!movie) {
    return <p>Фильм не найден или данные ещё загружаются...</p>;
  }
  return (
    <MovieMain>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <MoviesItem movie={movie} />

      <MovieDetailsTitle>Additional information</MovieDetailsTitle>
      <MovieDetailsList>
        <MovieDetailsItem>
          <NavLink to="cast">Cast</NavLink>
        </MovieDetailsItem>
        <MovieDetailsItem>
          <NavLink to="reviews">Reviews</NavLink>
        </MovieDetailsItem>
      </MovieDetailsList>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </MovieMain>
  );
};

export default MovieDetails;
