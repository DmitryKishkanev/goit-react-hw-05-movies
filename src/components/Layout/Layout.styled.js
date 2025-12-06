import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const LayoutHeader = styled.header`
  display: flex;
  /* flex-direction: column; */
  align-items: end;
  justify-content: space-between;
  padding: 15px 0;
  margin-bottom: 30px;

  width: 95%;

  border-bottom: 1px solid black;
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
    /* transform: scale(1); */
    color: rgb(33, 150, 243);
  }
`;

const LayoutList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0 0 0 auto;

  /* list-style: none; */
`;

const LayoutIten = styled.li`
  display: inline-block;

  list-style-type: none;

  cursor: pointer;

  & .active {
    padding: 6px;
    border-radius: 4px;
    background-color: rgb(33, 150, 243);
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
    /* background-color: rgba(84, 178, 255, 1); */
    color: black;
  }
`;

export { LayoutHeader, LayoutTitle, LayoutList, LayoutIten, StyledNavLink };
