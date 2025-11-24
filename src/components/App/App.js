import { Routes, Route } from 'react-router';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Container } from 'components/App/App.styled';

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Movies" element={<Movies />} />
        </Route>
      </Routes>
    </Container>
  );
}
