import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';

const headerNav = ` position: absolute;
  left: 50%;
  z-index: 1;
`;
export const Nav = styled.nav`
  background-color: ${({ theme }) =>
    theme === 'dark' ? `${colors.primaryDark}` : `${colors.light}`};

  border-top: ${({ isopen, theme }) =>
    isopen
      ? theme === 'dark'
        ? `1px solid rgba(243, 243, 243, 0.2)`
        : `1px solid rgba(22, 31, 55, 0.10)`
      : 'none'};

  ${({ isopen, location }) =>
    location === 'footer'
      ? ``
      : isopen
      ? ` position: fixed;
  top: 72px;
   width: 100vw;
  height: 100vh;
  transform: translate(-50%, 0%);
  padding-top: 160px; @media screen and (min-width: 768px) {
    padding-top: 256px;top: 85px}`
      : ` top: 50%; transform: translate(-50%,-50%);`}
  ${({ location }) => (location === 'footer' ? `` : `${headerNav}`)};
`;

const footerNavigationList = `
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 16px;
    @media screen and (min-width: 1440px) {
      gap: 24px;
    }
  }
`;
const headerNavigationList = `
 height: 36px;
 align-items: center;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    height: 38px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: ${({ isopen, location }) =>
    location === 'footer' ? 'column' : isopen ? `column` : `row`};
  ${({ location }) =>
    location === 'footer'
      ? `${footerNavigationList}`
      : `${headerNavigationList}`};
`;

export const NavListItem = styled.li`
  ${({ location }) =>
    location === 'footer'
      ? ``
      : `display: flex;
      align-items: center;
  height: 36px;
  @media screen and (min-width: 1440px) {
    height: 38px;
  }`};
`;

const footerStyledNavigationLink = `padding: 0;
  color: ${colors.light};
  font-size: 14px;
  line-height: 22.4px;
  border:none;
  
  &:hover,
  &:focus {opacity:0.5;font-size:15px;
  }`;

const headerStyledNavigationLink = `  line-height: calc(20 / 14);
  padding: 8px 16px;
  @media screen and (min-width: 768px) {
    line-height: 22.4px;
  }
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
  }`;

export const StyledNavigationLink = styled(NavLink)`
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.light}; background: ${colors.primaryDark}; border: 1px solid rgba(243, 243, 243, 0.20);`
      : `color: ${colors.primaryDark}; background: ${colors.light}; border: 1px solid rgba(22, 31, 55, 0.20);`}
  font-weight: 500;
  transition:
    background 0.2s,
    opacity 250ms ease,
    font-size 250ms ease;
  ${({ location }) =>
    location === 'footer'
      ? `${footerStyledNavigationLink}`
      : `${headerStyledNavigationLink}`};
`;
