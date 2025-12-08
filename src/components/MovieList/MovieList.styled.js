import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const MoviesList = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
`;

const MovieItem = styled.li`
  width: 400px;

  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  list-style-type: none;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

const MovieLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
`;

const MovieImg = styled.img`
  margin-bottom: 6px;
  width: 100%;
  height: 225px;

  object-fit: cover;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const MovieTitle = styled.h3`
  margin: 0;
  color: black;
`;

export { MoviesList, MovieItem, MovieLink, MovieImg, MovieTitle };
