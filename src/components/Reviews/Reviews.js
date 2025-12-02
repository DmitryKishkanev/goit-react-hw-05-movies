import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'moviesApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const getMovieReviews = async () => {
      try {
        const resMovieReviews = await fetchMovies(`/movie/${movieId}/reviews`, {
          signal: controller.signal,
        });
        setReviews(resMovieReviews?.results || []);
        setError(null);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Request canceled');
        } else {
          setError(
            `Failed to load reviews: ${error.message || 'Unknown error'}`,
          );
          console.error('Error while receiving data:', error);
        }
      } finally {
        setLoading(false);
      }
    };
    getMovieReviews();

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
      ) : reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
