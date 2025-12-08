import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { Global, css } from '@emotion/react';
import Layout from 'components/Layout';
import { Container } from 'components/App/App.styled';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export default function App() {
  return (
    <>
      {/* Оставляет место с правой стороны под скрол, что бы не дёргался экран  */}
      <Global
        styles={css`
          html {
            overflow-y: scroll;
            scrollbar-gutter: stable;
          }
        `}
      />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </>
  );
}
