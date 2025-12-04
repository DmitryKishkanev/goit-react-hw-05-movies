import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovies } from 'moviesApi';
import noImage from 'img/no-image.jpg';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`..`);
  };

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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : castList.length === 0 ? (
        <p>We don't have a cast list for this movie</p>
      ) : (
        <ul>
          {castList.map(castItem => (
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
      )}

      <button type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default Cast;
