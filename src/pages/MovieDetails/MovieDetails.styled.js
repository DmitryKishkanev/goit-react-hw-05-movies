import styled from '@emotion/styled';

const MovieMain = styled.main`
  width: 95%;
`;

const MovieDetailsTitle = styled.h3`
  margin: 0px 0px 12px 8px;
`;

const MovieDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0px 40px 20px;

  margin-top: 0;
  margin-bottom: 30px;

  box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.1);
`;

const MovieDetailsItem = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export { MovieMain, MovieDetailsTitle, MovieDetailsList, MovieDetailsItem };
