import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <h3>{movie.title}</h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieList;
