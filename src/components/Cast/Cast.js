import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'moviesApi';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resMovieCast = await fetchMovies(`movie/${movieId}/credits`);
        const resMovieAllPeople = [...resMovieCast.cast, ...resMovieCast.crew];
        setCastList(resMovieAllPeople);
      } catch (error) {
        console.error('Error while receiving data:', error);
      }
    };
    getMovies();
  }, [movieId]);

  return (
    <div>
      {
        <ul>
          {castList.map(castItem => (
            <li key={castItem.credit_id}>
              {castItem.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${castItem.profile_path}`}
                  alt={castItem.name}
                />
              ) : (
                <span>Нет фото</span>
              )}

              <p>{castItem.original_name}</p>
              <p>
                {castItem.character
                  ? `Character: ${castItem.character}`
                  : `Department: ${castItem.department}`}
              </p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Cast;
