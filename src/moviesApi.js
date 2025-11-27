const movies = [
  { id: 'm-1', name: 'Movie 1' },
  { id: 'm-2', name: 'Movie 2' },
  { id: 'm-3', name: 'Movie 3' },
];

export const getMovies = () => {
  return movies;
};

export const getMovieByName = movieName => {
  return movies.find(
    movie => movie.name.toLowerCase().trim() === movieName.toLowerCase().trim(),
  );
};

export const getMovieById = movieId => {
  return movies.find(movie => movie.id === movieId);
};
