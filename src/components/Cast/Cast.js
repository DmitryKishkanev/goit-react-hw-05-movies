import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovies } from 'moviesApi';
import noImage from 'img/no_img.jpg';
import {
  CastContainer,
  СastSection,
  СastSectionItem,
  СastSectionImg,
  ActorName,
  CharacterName,
  СastSectionButton,
} from 'components/Cast/Cast.styled';

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
        if (error.code === 'ERR_CANCELED') {
          // Запрос отменён — просто игнорируем
          return;
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
      console.log('Cast: Компонент размонтирован, запрос прерван');
    };
  }, [movieId]);

  return (
    <CastContainer>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : castList.length === 0 ? (
        <p>We don't have a cast list for this movie</p>
      ) : (
        <СastSection>
          {castList.map(castItem => (
            <СastSectionItem key={castItem.credit_id}>
              <СastSectionImg
                src={
                  castItem.profile_path
                    ? `https://image.tmdb.org/t/p/w500${castItem.profile_path}`
                    : noImage
                }
                alt={castItem.name}
              />
              <ActorName>{castItem.original_name}</ActorName>
              <span>character:</span>
              <CharacterName>{castItem.character}</CharacterName>
            </СastSectionItem>
          ))}
        </СastSection>
      )}

      <СastSectionButton type="button" onClick={handleClose}>
        Close
      </СastSectionButton>
    </CastContainer>
  );
};

export default Cast;
