import styled from '@emotion/styled';

const MovieArticle = styled.article`
  display: flex;
  gap: 30px;
  justify-content: flex-start;
  padding: 14px 6px;
  margin-bottom: 50px;

  box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.1);
`;

const MovieImg = styled.img`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;

const MovieInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.h2`
  margin-left: 0 !important;
`;

const ScoreText = styled.p`
  margin-top: 0;
  margin-bottom: 30px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`;

const OverviewTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 6px;
`;

const OverviewText = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
`;

const GenresTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 6px;
`;

const GenresList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  margin-top: 0;

  list-style-type: none;
`;

export {
  MovieArticle,
  MovieImg,
  MovieInfoBox,
  MovieTitle,
  ScoreText,
  OverviewTitle,
  OverviewText,
  GenresTitle,
  GenresList,
};
