import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { fetchMovies } from 'moviesApi';
import BackLink from 'components/BackLink';
import MoviesItem from 'components/MoviesItem';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resMovies = await fetchMovies(`movie/${movieId}`);
        setMovie(resMovies);
      } catch (error) {
        console.error('Ошибка при получении фильмов:', error);
      }
    };
    getMovies();
  }, [movieId]);

  if (!movie) {
    return <p>Фильм не найден или данные ещё загружаются...</p>;
  }
  return (
    <main>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <MoviesItem movie={movie} />

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
