import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  LayoutHeader,
  LayoutTitle,
  LayoutList,
  LayoutIten,
  StyledNavLink,
} from 'components/Layout/Layout.styled';

const Layout = () => {
  return (
    <>
      <LayoutHeader>
        <StyledNavLink to="/">
          <LayoutTitle>MoviesHook</LayoutTitle>
        </StyledNavLink>

        <LayoutList>
          <LayoutIten>
            <StyledNavLink to="/">Home</StyledNavLink>
          </LayoutIten>
          <LayoutIten>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </LayoutIten>
        </LayoutList>
      </LayoutHeader>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
