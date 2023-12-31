import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'src/colors';

export const StyledLogoLink = styled(NavLink)`
  padding: 0;
  display: inline-flex;
  align-items: center;

  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.light};`
      : `color: ${colors.secondaryDark};`}

  font-size: 16px;
  line-height: calc(18 / 16);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const LogoSvg = styled.svg`
  width: 22px;
  height: 22px;
  margin-right: 8px;
  fill: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.secondaryDark}`};
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }
`;
