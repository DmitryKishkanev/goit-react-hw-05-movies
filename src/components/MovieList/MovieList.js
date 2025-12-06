import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MoviesList,
  MovieItem,
  MovieLink,
  MovieImg,
  MovieTitle,
} from 'components/MovieList/MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieLink>
        </MovieItem>
      ))}
    </MoviesList>
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
