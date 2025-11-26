import { useParams } from 'react-router';
import { getMovieById } from 'moviesApi';

const MovieDetails = () => {
  const { id } = useParams;
  const movie = getMovieById(id);
  return (
    <main>
      <h2>
        Details {movie.name} - {id}
      </h2>
    </main>
  );
};

export default MovieDetails;
