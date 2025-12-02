import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'moviesApi';
import noImage from 'img/no-image.jpg';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const getMovieCast = async () => {
      try {
        const resMovieCast = await fetchMovies(`movie/${movieId}/credits`, {
          signal: controller.signal,
        });
        setCastList(resMovieCast?.cast || []);
        setError(null);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Request canceled');
        } else {
          setError(
            `Failed to load cast list: ${error.message || 'Unknown error'}`,
          );
          console.error('Error while receiving data:', error);
        }
      } finally {
        setLoading(false);
      }
    };
    getMovieCast();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {
        <ul>
          {castList &&
            castList.map(castItem => (
              <li key={castItem.credit_id}>
                <img
                  src={
                    castItem.profile_path
                      ? `https://image.tmdb.org/t/p/w200${castItem.profile_path}`
                      : noImage
                  }
                  alt={castItem.name}
                />

                <p>{castItem.original_name}</p>
                <p>{`Character: ${castItem.character}`}</p>
              </li>
            ))}
        </ul>
      }
    </div>
  );
};

export default Cast;
