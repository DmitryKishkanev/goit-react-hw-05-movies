import { NavLink } from 'react-router';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <NavLink to={`${movie.id}`}></NavLink>
          <h3>{movie.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
