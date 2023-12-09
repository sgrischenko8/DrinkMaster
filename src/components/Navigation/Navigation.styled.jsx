import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';

export const Nav = styled.nav`
  position: absolute;
  left: 50%;

  z-index: 2;
  background-color: ${({ theme }) =>
    theme === 'dark' ? `${colors.primaryDark}` : `${colors.light}`};

  border-top: ${({ isOpen, theme }) =>
    isOpen
      ? theme === 'dark'
        ? `1px solid rgba(243, 243, 243, 0.2)`
        : `1px solid rgba(22, 31, 55, 0.10)`
      : 'none'};
  ${({ isOpen }) =>
    isOpen
      ? ` position: fixed;
  top: 72px;
   width: 100vw;
  height: 100vh;
  transform: translate(-50%, 0%);
  padding-top: 160px; @media screen and (min-width: 768px) {
    padding-top: 256px;top: 85px}`
      : ` top: 50%; transform: translate(-50%,-50%);`}
`;

export const NavigationList = styled.ul`
  display: flex;
  height: 36px;

  flex-direction: ${({ isOpen }) => (isOpen ? `column` : `row`)};
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    height: 38px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavListItem = styled.li`
  display: flex;
  height: 36px;

  @media screen and (min-width: 1440px) {
    height: 38px;
  }
`;

export const StyledNavigationLink = styled(NavLink)`
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.light}; background: ${colors.primaryDark}; border: 1px solid rgba(243, 243, 243, 0.20);`
      : `color: ${colors.primaryDark}; background: ${colors.light}; border: 1px solid rgba(22, 31, 55, 0.20);`}
  font-weight: 500;
  line-height: calc(20 / 14);
  padding: 8px 16px;
  transition: background 0.2s;

  &:hover {
    color: ${colors.light};
    background: ${colors.secondaryDark};
    border: ${colors.primaryDark};
  }

  &.active {
    color: ${colors.light};
    background: ${colors.secondaryDark};
    border: ${colors.primaryDark};
  }

  @media screen and (min-width: 768px) {
    line-height: 22.4px;
  }
`;
