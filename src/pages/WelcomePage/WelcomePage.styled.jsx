import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as CocktailIcon } from 'src/images/cocktail.svg';
import { colors } from 'src/colors';
import hero from 'src/images/hero.jpg';
import hero2 from 'src/images/hero@2x.jpg';

export const HeroImg = styled.div`
  position: absolute;
  left: 80px;
  top: 0;
  width: 100%;
  height: 100%;
  z-index:1;
  box-sizing:border-box;

  background: linear-gradient(0deg, #0a0a1120 0%, #0a0a1120 100%),
    linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 25%),
    linear-gradient(82deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%), url(${hero});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: linear-gradient(0deg, #0a0a1120 0%, #0a0a1120 100%),
      linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      linear-gradient(82deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      url(${hero2});
  }

  background-position: left 20% center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background: linear-gradient(0deg, rgba(10, 10, 17, 0) 0%, #0a0a1120 100%),
    linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 25%),
    linear-gradient(82deg, #0a0a11 15%, rgba(10, 10, 17, 0) 30%), url(${hero});

   left: 302px;
    background-position: left center;
    background-size:cover; 
    }
    @media screen and (min-width: 1440px) {
       background: linear-gradient(0deg, rgba(10, 10, 17, 0) 0%, #0a0a1120 100%),
    linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 25%),
    linear-gradient(82deg, #0a0a11 8%, rgba(10, 10, 17, 0) 30%), url(${hero});
      left: 737px;
      background-position: left;
      background-size:60%; 
      }
    }
  }

`;

export const FlexContainer = styled.div`
  position: relative;
  margin-bottom: 14px;
  display: flex;
  gap: 2px;
  align-items: baseline;
`;

export const Title = styled.h1`
  color: ${colors.light};
  font-size: 28px;
  font-weight: 600;
  line-height: calc(32 / 28);
  letter-spacing: -0.56px;

  z-index: 5;

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

export const StyledCocktailIcon = styled(CocktailIcon)`
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
  font-size: 14px;
  line-height: calc(18 / 14);

  color: ${colors.light};
  z-index: 5;
  @media screen and (max-width: 767px) {
    width: 319px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 470px;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 14px;
  z-index: 2;
`;

export const AuthLink = styled(Link)`
  padding: 14px 40px;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);

  color: ${colors.secondaryDark};
  border-radius: 42px;
  background: ${colors.light};

  &:hover {
    color: ${colors.light};
    background: ${colors.secondaryDark};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    color: #161f37;
    font-size: 16px;
    line-height: calc(18 / 16);
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
