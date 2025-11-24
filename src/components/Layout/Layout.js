import { NavLink } from 'react-router';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Movies">Movies</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Layout;
