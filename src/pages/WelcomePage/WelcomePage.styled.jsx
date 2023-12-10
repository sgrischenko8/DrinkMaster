import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'src/colors';

export const FlexContainer = styled.div`
  position: relative;
  margin-bottom: 14px;
  display: flex;
  gap: 2px;
  align-items: baseline;
`;

export const Title = styled.h1`
  color: ${({ $color }) => $color};
  margin-bottom: ${({ page }) => (page ? '14px' : '28px')};
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
    letter-spacing: -0.8px;
  }
`;

const rotate = keyframes`
 0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
    25% {
    -webkit-transform: rotate(-25deg);
            transform: rotate(-25deg);
    opacity: 1;
  }
  75% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 0;
  }
`;

export const StyledCocktailIcon = styled.svg`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 100%;
  display: block;
  fill: ${colors.disabled};
  stroke: ${colors.light};

  animation: ${rotate} 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const WelcomeText = styled.p`
  margin-top: 14px;
  margin-bottom: 40px;

  color: ${colors.light};

  @media screen and (max-width: 767px) {
    width: 319px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 485px;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 14px;
`;

export const AuthLink = styled(Link)`
  color: ${colors.secondaryDark};
  background: ${colors.light};

  &:hover {
    color: ${colors.light};
    background: ${colors.secondaryDark};
  }

  @media screen and (min-width: 768px) {
    color: #161f37;
  }
`;

export const Signin = styled(AuthLink)`
  color: ${colors.light};
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  &:hover {
    color: ${colors.secondaryDark};
    background: ${colors.light};
  }
`;
