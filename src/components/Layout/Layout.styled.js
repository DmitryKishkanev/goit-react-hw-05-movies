import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const LayoutHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 6px;
  margin-bottom: 30px;

  width: 95%;

  box-shadow: 0px 6px 2px -2px rgba(0, 0, 0, 0.2);
`;

const LayoutTitle = styled.h1`
  margin: 0;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 700;
  font-size: 58px;
  line-height: 1.19;
  letter-spacing: 0.03em;

  &:hover,
  &:focus {
    color: rgb(33, 150, 243);
  }
`;

const LayoutList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0;
  margin: 0 0 0 auto;
`;

const LayoutIten = styled.li`
  display: inline-block;

  list-style-type: none;

  cursor: pointer;

  & .active {
    padding: 10px 20px;
    border-radius: 8px;
    background-color: rgb(33, 150, 243);
    color: white;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;

  color: black;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 500;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;

  &:hover,
  &:focus {
    transform: scale(1.07);
    color: rgb(33, 150, 243);
  }

  &.active {
    color: black;
  }
`;

export { LayoutHeader, LayoutTitle, LayoutList, LayoutIten, StyledNavLink };
