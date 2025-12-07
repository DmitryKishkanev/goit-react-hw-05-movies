import PropTypes from 'prop-types';
import {
  MovieArticle,
  MovieImg,
  MovieInfoBox,
  MovieTitle,
  ScoreText,
  OverviewTitle,
  OverviewText,
  GenresTitle,
  GenresList,
} from 'components/MoviesItem/MoviesItem.styled';

const MoviesItem = ({ movie }) => {
  return (
    <MovieArticle>
      <MovieImg
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieInfoBox>
        <MovieTitle>{movie.title}</MovieTitle>
        <ScoreText>User Score: {movie.vote_average}</ScoreText>
        <OverviewTitle>Overview</OverviewTitle>
        <OverviewText>{movie.overview}</OverviewText>
        <GenresTitle>Genres</GenresTitle>
        <GenresList>
          {movie.genres &&
            movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </GenresList>
      </MovieInfoBox>
    </MovieArticle>
  );
};

MoviesItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default MoviesItem;
