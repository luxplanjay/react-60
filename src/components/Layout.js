import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
`;

const Link = styled(NavLink)`
  padding: 8px;
  &.active {
    color: orangered;
  }
`;

export const Layout = () => {
  return (
    <Container>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/other">Other page</Link>
      </nav>
      <Outlet />
    </Container>
  );
};
