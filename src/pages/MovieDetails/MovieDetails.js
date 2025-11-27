import { useParams, NavLink, Outlet } from 'react-router';
import { getMovieById } from 'moviesApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = getMovieById(movieId);

  if (!movie) {
    return <p>Фильм не найден или данные ещё загружаются...</p>;
  }
  return (
    <main>
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
