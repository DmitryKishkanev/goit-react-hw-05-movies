import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { useRef } from 'react';
import { getMovieById } from 'moviesApi';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = getMovieById(movieId);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  if (!movie) {
    return <p>Фильм не найден или данные ещё загружаются...</p>;
  }
  return (
    <main>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <h2>
        Details: {movie.name} - {movieId}
      </h2>
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
